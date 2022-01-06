import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCUstomersComponent implements OnInit {

  customerList : Customer[];

  constructor(public customerService : CustomerService) {

    console.log("View customer comp");
    this.customerList = this.customerService.getCustomers();


   }

  ngOnInit() {
  }

}
