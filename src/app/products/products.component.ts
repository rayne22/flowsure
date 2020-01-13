import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  numbers: any[];

  number1 = [
    {
      imageUrl: 'assets/img/angular2-logo-red.png',
      route: '/motor-third-party'

    },
    {
      imageUrl: 'assets/img/angular2-logo-red.png'
    },
    {
      imageUrl: 'assets/img/angular2-logo-red.png'
    },
    {
      imageUrl: 'assets/img/angular2-logo-white.png'
    }
  ];

  constructor() {}

  ngOnInit() {
    this.numbers = this.number1;
  }
}
