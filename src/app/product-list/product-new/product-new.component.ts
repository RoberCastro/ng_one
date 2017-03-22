import { Component, OnInit } from '@angular/core';
import {IProduct} from "../product";

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

 // private errorMessage;
  product: IProduct ;


  constructor() { }

  ngOnInit() {

  }



}
