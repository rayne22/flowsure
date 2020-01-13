import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-corporate-client',
  templateUrl: './create-corporate-client.component.html',
  styleUrls: ['./create-corporate-client.component.scss']
})
export class CreateCorporateClientComponent implements OnInit {
  clientForm = new FormGroup({
    name: new FormControl(''),
    registration: new FormControl(''),
    contact: new FormControl(''),
    email: new FormControl(''),
    sector: new FormControl(''),
  });
  constructor(public dialogRef: MatDialogRef<CreateCorporateClientComponent>) {}

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }

  save() {}
}
