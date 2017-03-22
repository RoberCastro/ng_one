import { Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import {ProductDetailComponent} from "./product-list/product-detail.component";


export const ROUTES: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: '**', redirectTo: 'products', pathMatch: 'full' }
];
