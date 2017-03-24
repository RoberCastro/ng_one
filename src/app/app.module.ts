import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StarComponent } from './shared/ui/star/star.component';
import { ProductService } from './shared/providers/product.service';
import { RouterModule } from "@angular/router";
import { ArrayFilterPipe } from './shared/pipes/array-filter.pipe';
import { ProductDetailComponent } from './product-list/product-detail.component';
import { ROUTES } from "./app.route";
import { ProductNewComponent } from './product-list/product-new/product-new.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ArrayFilterPipe,
    ProductDetailComponent,
    ProductNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
