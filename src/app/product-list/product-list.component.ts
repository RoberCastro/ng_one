import { Component, OnInit } from '@angular/core';

interface IProduct{
  id: number;
  images: string[];
  name: string;
  note: number;
  index: number;
  esVisible: boolean;
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
      images : [
        'https://www.w3schools.com/css/img_fjords.jpg',
        'https://d1ez3020z2uu9b.cloudfront.net/imagecache/blog-photos/2245.jpg',
        'https://image.yachtcharterfleet.com/yacht-reviews/rodas-beach-las-islas-cies-galicia-spain-large.jpg?k=676e&w=900&h=800&q=75&o=i&image_id=30246'
      ],
      name : 'test',
      note : 6,
      index : 0,
      esVisible: true,

    });
    this.products.push({
      id : 2,
      images : [],
      name : ' 2. test',
      note : 3,
      index : 0,
      esVisible: true,

    });

    this.products.push({
      id : 3,
      images : [
        'https://www.w3schools.com/css/img_fjords.jpg',
        'https://d1ez3020z2uu9b.cloudfront.net/imagecache/blog-photos/2245.jpg',
        'https://image.yachtcharterfleet.com/yacht-reviews/rodas-beach-las-islas-cies-galicia-spain-large.jpg?k=676e&w=900&h=800&q=75&o=i&image_id=30246'
      ],
      name : 'hamaca',
      note : 5,
      index : 0,
      esVisible: true,

    });
    this.products.push({
      id : 4,
      images : [],
      name : 'Beach',
      note : 1,
      index : 0,
      esVisible: true,

    });

  }


  ngOnInit() {

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
