import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent{

  myName = "Brandom";
  public maForme;

  constructor(private _fb : FormBuilder) { }

  ngOnInit(): void{

    this.maForme = this._fb.group({
      index : [5,]
    });

  }

  onSubmit(value: any) {
    console.log(value);
  }



}



