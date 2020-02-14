import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-reciept',
  templateUrl: './create-reciept.component.html',
  styleUrls: ['./create-reciept.component.scss']
})
export class CreateRecieptComponent implements OnInit {
  receiptForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<CreateRecieptComponent>,
    private _formBuilder: FormBuilder
  ) {
    this.receiptForm = this._formBuilder.group({
      amount: ['', Validators.required],
      receipt_type: ['', Validators.required],
      received_from: ['', Validators.required]
    });
  }
  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }

  onReceipt() {}
}
