import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-debit-note',
  templateUrl: './create-debit-note.component.html',
  styleUrls: ['./create-debit-note.component.scss']
})
export class CreateDebitNoteComponent implements OnInit {
  debitNoteForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateDebitNoteComponent>,
    private _formBuilder: FormBuilder
  ) {
    this.debitNoteForm = this._formBuilder.group({
      amount: ['', Validators.required],
      receipt_type: ['', Validators.required],
      received_from: ['', Validators.required]
    });
  }

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }

  onDebit() {}
}
