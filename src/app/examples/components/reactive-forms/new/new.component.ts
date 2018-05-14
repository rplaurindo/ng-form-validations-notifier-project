import {
    Component,
    OnInit,
    Output
} from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators
} from '@angular/forms';

import { CrudService } from '../../../../services/crud/crud.service';
import { NgFormValidations } from '../../../../components/ng-form-validations-notifier/services/ng-form-validations';


@Component({
    selector: 'app-reactive-forms',
    templateUrl: '../component.html',
    styleUrls: ['../component.sass']
})
export class NewComponent implements  OnInit {

    form: FormGroup;

    constructor(
        private crudService: CrudService,
        private formBuilder: FormBuilder,
        private validator: NgFormValidations
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: [null, [Validators.required, Validators.minLength(4)]],
            name2: [null, [Validators.required]]
        });
    }

    onSubmit() {
        // this.validator.notify();
        this.validator.notify(this.form);
        if (this.form.valid) {
            this.crudService.create(this.form.value);
        }
    }

}
