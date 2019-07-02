import {
    Component,
    Input,
    OnInit
} from '@angular/core';
import {
    FormControl,
    FormGroup,
    NgForm
} from '@angular/forms';

import { Notifier } from '../../services';


@Component({
    selector: 'lib-form-validation-list',
    templateUrl: './template.html',
    styleUrls: ['./style.sass']
})
export class ListComponent implements OnInit {

    @Input()
    messages: object;

    @Input()
    nameTranslations: object;

    canShow: boolean;
    errorMessages: Array<string> = [];

    constructor(
        private notifier: Notifier
    ) {
        this.canShow = false;
    }

    ngOnInit() {

    }

    validate(form: NgForm | FormGroup) {

        let mappedErrorKey: string;

        let controls: object;

        let control: FormControl;

        if (form) {
            controls = form.controls;
            this.errorMessages = [];
            for (const fieldName of Object.keys(form.controls)) {
                control = controls[fieldName];
                mappedErrorKey = this.notifier.getNextErrorFor(
                    control,
                    Notifier.typeKeys(this.messages)
                );

                if (this.nameTranslations[fieldName] && mappedErrorKey) {
                    this.errorMessages.push(`\n${this.nameTranslations[fieldName]} ${this.messages[mappedErrorKey]}`);
                }
            }

            if (mappedErrorKey) {
                this.canShow = true;
            }
        }
    }

}
