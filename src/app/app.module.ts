import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './component/cart/cart.component';
import { HeaderComponent } from './component/header/header.component';
import { SellerComponent } from './component/seller/seller.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component'
import { ProductsComponent } from './products/products.component';
import { CoponentOneComponent } from './coponent-one/coponent-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentThreeComponent } from './component-three/component-three.component';




@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    SellerComponent,
    HomeComponent,
    LoginComponent,
    TableComponent,
    SearchComponent,
    ProductListComponent,
    ProductsComponent,
    CoponentOneComponent,
    ComponentTwoComponent,
    ComponentThreeComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
