import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-view-corporate-client',
  templateUrl: './view-corporate-client.component.html',
  styleUrls: ['./view-corporate-client.component.scss']
})
export class ViewCorporateClientComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ViewCorporateClientComponent>) {}

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }
}
