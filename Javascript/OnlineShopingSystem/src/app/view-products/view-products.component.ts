import { Component, OnInit } from '@angular/core';
import { ProductService } from "../services/product.service";
import { Product } from '../model/product';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  products : Product[];

  constructor(public productService : ProductService) { 

    this.products = this.productService.getProducts();
    
  }

  ngOnInit() {
  }

}
