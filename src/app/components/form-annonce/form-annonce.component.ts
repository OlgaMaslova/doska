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
import { AnnonceCardComponent } from '../annonce-card/annonce-card.component';

@Component({
    selector: 'app-form-annonce',
    templateUrl: './form-annonce.component.html',
    styleUrls: ['./form-annonce.component.scss']
})
export class FormAnnonceComponent implements OnInit {
    form: FormGroup;

    @ViewChild(MatRipple) ripple: MatRipple;

    constructor(
        private fb: FormBuilder,
        private location: Location,
        private annonceService: AnnonceService,
        private _snackBar: MatSnackBar,
        private translate: TranslateService
    ) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            type: [null, [Validators.required]],
            title: [null, [Validators.required]],
            text: [null, [Validators.required]],
            contactName: [null],
            contactEmail: [null, [Validators.required, Validators.email]],
            contactPhone: [null],
            location: [null],
            photo: [null],
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
        const input = this.form.value;
        if (!this.form.valid) {
            return;
        }
        try {
            if (input.photo) {
                input.photos = [input.photo];
            }
            delete input.photo;
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
}
