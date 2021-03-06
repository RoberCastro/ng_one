import { Injectable } from '@angular/core';
import { IProduct } from '../../product-list/product';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';



@Injectable()
export class ProductService {

  private _productUrl = 'http://localhost:3000/products';


  constructor(private _http: Http){ }

  getProducts(): Observable<IProduct[]>{

    return this._http.get(this._productUrl)
      .map((response: Response) =>  <IProduct[]>response.json())
      .catch(this.handleError);


  }
  handleError(error: any){
    console.log(error);
    return Observable.throw(error || 'backend server error');
  }

  getProductsById(id: number) {
     return this.getProducts()
       .map(products =>{
           return products.find( product => product.id === id);
       } )
  }
}
