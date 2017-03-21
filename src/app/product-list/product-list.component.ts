import { Component, OnInit } from '@angular/core';
import {IProduct} from "./product";
import {ProductService} from "../shared/providers/product.service";




@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: String = 'Mes produits son contents';
  products: IProduct [] = [];
  private errorMessage;



  constructor(private _productService: ProductService) {


  }


  ngOnInit(): void {

    this._productService.getProducts()
      .subscribe(
        products => this.products = products,
        error => this.errorMessage = <any>error
      );
  }

  changerPhoto(product: IProduct) {
    // Le modulo de la longueur du tableau ça permet que quand longueur du tableau
    // soit égal à l'index le modulo soit zéro ainsi que le nouveau index
    product.index = (product.index + 1) % product.images.length;
  }

  showHide(product: IProduct) {
    product.esVisible = !product.esVisible;
  }

  onNotify(message: string):void {  }
}
