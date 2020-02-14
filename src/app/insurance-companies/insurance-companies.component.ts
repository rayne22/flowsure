import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance-companies',
  templateUrl: './insurance-companies.component.html',
  styleUrls: ['./insurance-companies.component.scss']
})
export class InsuranceCompaniesComponent implements OnInit {
  constructor() {}
  numbers: any[];

  number1 = [
    {
      name: 'IT',
      address: 'IT Number 1',
      imageUrl: 'assets/img/angular2-logo-white.png'
    },
    {
      name: 'Computer',
      address: 'Computer Number 1',
      imageUrl: 'assets/img/angular2-logo-red.png'
    },
    {
      name: 'Garden',
      address: 'Garder Number 1',
      imageUrl: 'assets/img/angular2-logo-white.png'
    },
    {
      name: 'Cars',
      address: 'Cars Number 1',
      imageUrl: 'assets/img/angular2-logo-red.png'
    }
  ];

  ngOnInit() {
    this.numbers = this.number1;
  }
}
