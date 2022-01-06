import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSwitchService {

  private dynamicData : boolean = false;

  private key = 'static';

  toggleDataSwitch() : boolean {
    this.dynamicData = !this.dynamicData;
    localStorage.setItem(this.key, String(this.dynamicData));
    return this.dynamicData;
  }

  constructor() {
    localStorage.setItem(this.key, String(this.dynamicData));
    console.log("Ctor of toggle service " + this.dynamicData);
   }

  isDynamicData() {
    if(localStorage.getItem(this.key)) {
      console.log(" storage data : " + localStorage.getItem(this.key).toLowerCase());
      return JSON.parse(localStorage.getItem(this.key).toLowerCase());
    }
    return this.dynamicData;
  }
}
