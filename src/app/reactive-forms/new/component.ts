import {
    Component
    , OnInit
    , ViewChild
} from '@angular/core';
import {
    FormGroup
    , FormBuilder
    , Validators
} from '@angular/forms';

import { Ng4ValidationsNote } from '@actjs.on/ng4-validations-note';


@Component({
    selector: 'app-reactive-form-form',
    templateUrl: '../template.html',
    styleUrls: ['../style.styl']
})
export class NewComponent implements OnInit {

    @ViewChild('validatorAsList', { static: false }) private validatorAsList: Ng4ValidationsNote.ListComponent;

    @ViewChild('uniqMessageValidator', { static: false }) private uniqMessageValidator: Ng4ValidationsNote.UniqComponent;

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: [null, [Validators.required, Validators.minLength(4)]],
            name2: [null, [Validators.required]]
        });
    }

    onSubmit() {

        this.validatorAsList.validate(this.form);

        // this.uniqMessageValidator.validate(this.form);
    }

}
