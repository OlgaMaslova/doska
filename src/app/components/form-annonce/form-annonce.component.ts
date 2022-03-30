/* eslint-disable no-underscore-dangle */
import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import { MatRipple } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { AnnonceService } from 'src/app/annonce.service';
import { CreateAnnonceInput } from 'src/app/API.service';
import { AnnonceStatus } from 'src/models';

import * as uuid from 'uuid';
import { uploadFileToS3 } from 'src/app/helpers.service';
import { Auth } from 'aws-amplify';

@Component({
    selector: 'app-form-annonce',
    templateUrl: './form-annonce.component.html',
    styleUrls: ['./form-annonce.component.scss']
})
export class FormAnnonceComponent implements OnInit {
    form: FormGroup;

    @ViewChild(MatRipple) ripple: MatRipple;

    fileToUpload;

    currentFilePath;

    isAdmin = false;

    constructor(
        private fb: FormBuilder,
        private location: Location,
        private annonceService: AnnonceService,
        private _snackBar: MatSnackBar,
        private translate: TranslateService
    ) {}

    async ngOnInit() {
        try {
            await Auth.currentAuthenticatedUser().then((user) => {
                if (user) {
                    this.isAdmin = true;
                }
            });
        } catch (error) {}
        this.form = this.fb.group({
            id: uuid.v4(),
            type: [null, [Validators.required]],
            title: [null, [Validators.required]],
            text: [null, [Validators.required]],
            contactName: [null, [Validators.required]],
            contactEmail: [null, [Validators.required, Validators.email]],
            contactPhone: [null],
            location: [null],
            status: AnnonceStatus.PENDING
        });
    }

    get f(): { [key: string]: AbstractControl } {
        return this.form.controls;
    }

    get errors(): any {
        const errors: {
            [key: string]: any;
        } = {};
        // eslint-disable-next-line guard-for-in
        for (const key in this.form.controls) {
            if (this.form.controls[key].errors) {
                errors[key as string] = this.form.controls[key].errors;
            }
        }
        return errors;
    }

    async onSubmit() {
        const input = this.form.value as CreateAnnonceInput;
        if (!this.form.valid) {
            return;
        }
        try {
            if (this.fileToUpload) {
                const result = await uploadFileToS3(
                    '',
                    this.fileToUpload,
                    input.id!
                );
                if (result) {
                    input.photos = [result];
                }
            }
            const created = await this.annonceService.createAnnonce(
                input as CreateAnnonceInput
            );
            this.openSnackBar();
            // console.log(created);
        } catch (e) {
            alert('Erreur de validation');
            console.error(e);
        }
        this.onCancel();
    }

    onCancel() {
        this.form.reset();
        this.location.back();
    }

    openSnackBar() {
        this._snackBar.open(
            this.translate.instant('creationSucces'),
            this.translate.instant('close')
        );
    }

    handleFileInput(files: FileList) {
        if (files.length > 0) {
            this.fileToUpload = files.item(0);
            // this.currentFilePath = URL.createObjectURL(this.fileToUpload);
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = (_event) => {
                this.currentFilePath = reader.result;
            };
        }
    }
}
