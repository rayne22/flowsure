import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-query',
  templateUrl: './add-query.component.html',
  styleUrls: ['./add-query.component.scss']
})
export class AddQueryComponent implements OnInit {
  queryForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AddQueryComponent>,
    private _formBuilder: FormBuilder
  ) {
    this.queryForm = this._formBuilder.group({
      query_title: ['', Validators.required],
      query_description: ['', Validators.required],
      client_name: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }
  onSave() {}
}
