import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../shared/providers/product.service";
import {IProduct} from "./product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private errorMessage;
  product: IProduct ;


  constructor(private _route: ActivatedRoute, private _productService: ProductService, private _router: Router) { }

  ngOnInit(): void {

    let id = parseInt(this._route.snapshot.params['id']);
    this._productService.getProductsById(id)
      .subscribe(
        product => {
          this.product = product;
        },
        error => this.errorMessage = <any>error
      )

  }

  changerPhoto(product: IProduct) {
    // Le modulo de la longueur du tableau ça permet que quand longueur du tableau
    // soit égal à l'index le modulo soit zéro ainsi que le nouveau index
    product.index = (product.index + 1) % product.images.length;
  }

  showHide(product: IProduct) {
    product.esVisible = !product.esVisible;
  }

  onBack(){
    this._router.navigate(['/products']);
  }

}
