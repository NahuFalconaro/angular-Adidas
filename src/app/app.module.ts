import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

import {FormsModule} from '@angular/forms';
import { StoreAboutComponent } from './store-about/store-about.component';
import { StoreCartComponent } from './store-cart/store-cart.component';
import { StoreHomeComponent } from './store-home/store-home.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { StoreCheckinComponent } from './store-checkin/store-checkin.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StoreAboutComponent,
    StoreCartComponent,
    StoreHomeComponent,
    InputNumberComponent,
    StoreCheckinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
