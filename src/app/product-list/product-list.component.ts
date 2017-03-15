import { Component, OnInit } from '@angular/core';

interface IProduct{
  id : number,
  image : string,
  name : string,
  note : number
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: String = 'Mes produits son contents';
  products: IProduct [] = [];

  constructor() {

    this.products.push({
      id : 1,
      image : 'https://www.w3schools.com/css/img_fjords.jpg',
      name : 'test',
      note : 6,

    });
    this.products.push({
      id : 2,
      image : 'https://www.w3schools.com/css/img_fjords.jpg',
      name : 'internet image',
      note : 5,

    });

    this.products.push({
      id : 3,
      image : 'https://www.w3schools.com/css/img_fjords.jpg',
      name : 'mon image',
      note : 3,

    });
  }

  ngOnInit() {

  }

}
