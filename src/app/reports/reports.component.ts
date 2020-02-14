import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RangeComponent } from '../range/range.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  form: FormGroup;

  rangesFooter = RangeComponent;

  inlineRange;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      date: [{ begin: new Date(2018, 7, 5), end: new Date(2018, 7, 25) }]
    });
  }

  ngOnInit() {}

  inlineRangeChange($event) {
    this.inlineRange = $event;
  }
}
