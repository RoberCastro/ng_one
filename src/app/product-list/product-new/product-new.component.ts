import { Component, OnInit } from '@angular/core';
import {IProduct} from "../product";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

 // private errorMessage;


  public submitted: boolean = false;
  public product: IProduct;

  constructor() { }


  ngOnInit() {
    this.product = <IProduct>{};

  }

  save(form: IProduct, isValid: boolean) {
    this.submitted = true;
    console.log(form, isValid);
  }

  submitForm(myForm:NgForm) {
    alert(JSON.stringify(myForm.value));
  }


}
