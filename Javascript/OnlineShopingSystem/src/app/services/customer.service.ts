import { Injectable } from '@angular/core';
import { customerList } from "../model/collections";
import { Customer } from '../model/customer';
import { DataSwitchService } from './data-switch.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  
  customers : Customer[] ; 

  

  constructor(public dataSwitch : DataSwitchService) {
    this.customers = customerList;
  }

  addCustomer(customer) {
    customer.id = this.customers.length + 1;
    this.customers.push(customer);
  }

  getCustomers() : Customer[] {

      if(this.dataSwitch.isDynamicData()) {
        
          return this.customers;
      }

      return null;

  }


}
