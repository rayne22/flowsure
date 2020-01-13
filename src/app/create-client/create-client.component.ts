import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {
  public name = '';

  clientForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    nrc: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    nationality: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<CreateClientComponent>) {}

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }

  save() {}
}
