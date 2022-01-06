import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handson',
  templateUrl: './handson.component.html',
  styleUrls: ['./handson.component.css']
})
export class HandsonComponent implements OnInit {

  constructor() { }
 // NOTE : SOme things from this file might be repeated in app.component as well, as we were doing continuous hands on.
  title = 'topicproject';
  isSelected : boolean = false;
  selected = 'red';
  change() {
    alert("Change called");
  }

  toggle() {
    this.isSelected = !this.isSelected;
    this.selected = 'blue';
  }

  ngOnInit() {
  }

}
