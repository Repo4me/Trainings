import { Component, OnInit } from '@angular/core';
import { DataSwitchService } from '../services/data-switch.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  checked : boolean; 
  constructor(public dataSwitchSErvice : DataSwitchService,
    public router : Router,
    public activatedRoute : ActivatedRoute) {

      this.checked = this.dataSwitchSErvice.isDynamicData();
      console.log("$$$$$$ " + this.dataSwitchSErvice.isDynamicData());
   }

   toggleDatSwitch(){
    
    this.checked = this.dataSwitchSErvice.toggleDataSwitch();
    console.log("**** " + this.dataSwitchSErvice.isDynamicData());
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
   }

  ngOnInit() {
  }

}
