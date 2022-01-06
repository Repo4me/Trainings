import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewCUstomersComponent } from './view-customers/view-customers.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewProductsComponent,
    ViewCUstomersComponent,
    AddProductsComponent,
    RegisterCustomerComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
