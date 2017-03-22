import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { ROUTES } from './app.route';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StarComponent } from './shared/ui/star/star.component';
import { ProductService } from './shared/providers/product.service';
import { RouterModule } from "@angular/router";
import { ArrayFilterPipe } from './shared/pipes/array-filter.pipe';
import { ProductDetailComponent } from './product-list/product-detail.component';
import {ROUTES} from "./app.route";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ArrayFilterPipe,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
