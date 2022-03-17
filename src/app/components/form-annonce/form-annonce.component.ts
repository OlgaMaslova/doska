import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import { AnnonceService } from 'src/app/annonce.service';
import { CreateAnnonceInput } from 'src/app/API.service';
import { AnnonceStatus } from 'src/models';

@Component({
    selector: 'app-form-annonce',
    templateUrl: './form-annonce.component.html',
    styleUrls: ['./form-annonce.component.scss']
})
export class FormAnnonceComponent implements OnInit {
    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private location: Location,
        private annonceService: AnnonceService
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
                delete input.photo;
            }
            await this.annonceService.createAnnonce(
                input as CreateAnnonceInput
            );
        } catch (e) {
            console.error(e);
        }
        this.onCancel();
    }

    onCancel() {
        this.form.reset();
        this.location.back();
    }
}
