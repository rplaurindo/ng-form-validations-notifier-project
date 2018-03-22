import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CrudService } from './../../../services/crud/crud.service';
import { ExampleModel } from '../../../services/crud/example-model';

@Component({
  selector: 'app-crud-form',
  templateUrl: './../crud-form.component.html',
  styleUrls: ['./crud-new.component.sass']
})
export class CrudNewComponent implements OnInit {

  private modelReference: ExampleModel;

  constructor(
    private crudService: CrudService
  ) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    this.crudService.createExampleModel(form.value);
  }

}
