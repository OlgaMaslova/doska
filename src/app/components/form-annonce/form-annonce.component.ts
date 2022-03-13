import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

@Component({
    selector: 'app-form-annonce',
    templateUrl: './form-annonce.component.html',
    styleUrls: ['./form-annonce.component.scss']
})
export class FormAnnonceComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder, private location: Location) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            type: [null, [Validators.required]],
            title: [null, [Validators.required]],
            text: [null, [Validators.required]],
            name: [null],
            phone: [null],
            email: ['', [Validators.required, Validators.email]]
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
        console.log(errors);
        return errors;
    }

    onSubmit() {
        // TODO
    }

    onCancel() {
        this.form.reset();
        this.location.back();
    }
}
