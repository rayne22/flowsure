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
    street_address: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    nationality: new FormControl(''),
    marital_status: new FormControl(''),
    date_of_birth: new FormControl(''),
    house_number: new FormControl(''),
    place_of_birth: new FormControl(''),
    residential_address: new FormControl(''),
    postal_address: new FormControl(''),
    title: new FormControl(''),
    middle_name: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<CreateClientComponent>) {}

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }

  save() {}
}
