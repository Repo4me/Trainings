import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from "../services/product.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  product : Product;

  constructor(private productService : ProductService,
    private router : Router,
    private activatedRoute : ActivatedRoute) { 
    this.product = new Product(0,'',0);
  }

  addProduct(form) {
    console.log(form);
    this.productService.addProduct(form);

    this.router.navigate(['/products']);

  }

  ngOnInit() {
  }

}
