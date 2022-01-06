import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  customerForm : FormGroup;
  name : FormControl;
  phone : FormControl;
  city : FormControl;
  username : FormControl;
  password : FormControl;

  constructor(private customerService : CustomerService,
     private formBuilder : FormBuilder,
     private router : Router) { }

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      name : this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      phone : this.formBuilder.control('', [Validators.required, Validators.minLength(10), Validators.pattern('^(\\+\\d{1,3}[- ]?)?\\d{10}$')]),
      city : this.formBuilder.control('', [Validators.required, Validators.minLength(2)]),
      username : this.formBuilder.control('', [Validators.required, Validators.minLength(8)]),
      password : this.formBuilder.control('', [Validators.required, Validators.minLength(5)])
    });
  }

  register() {

    console.log(this.customerForm.value);
    this.customerService.addCustomer(this.customerForm.value);

    this.router.navigate(['/customers']);

  }

  get f() {
    return this.customerForm.controls;
  }

}
