import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-view-individual-client',
  templateUrl: './view-individual-client.component.html',
  styleUrls: ['./view-individual-client.component.scss']
})
export class ViewIndividualClientComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ViewIndividualClientComponent>) {}

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }
}
