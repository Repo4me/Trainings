import { Injectable } from '@angular/core';
import { DataSwitchService } from './data-switch.service';
import { Product } from '../model/product';
import { productList } from "../model/collections";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Product[];

  constructor(private dataSwitch : DataSwitchService) {

    
    this.products = productList;
   }

  addProduct(prod) {
    prod.id = this.products.length + 1;
    this.products.push(prod);

  }

  getProducts() {

    if(this.dataSwitch.isDynamicData()) {
      console.log("returning static products");
      return this.products;
    }
    else {
      console.log("returning dynamic products");
      return null;
    }
    

  }
}
