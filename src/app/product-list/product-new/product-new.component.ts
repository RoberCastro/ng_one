import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent{

  myName = "Brandom";


  onSubmit(value: any) {
    console.log(value);
  }


}
