import { Component, OnInit } from '@angular/core';
import { Customer } from "../model/customer";
import { desertList } from "../model/collections";
import colorList from "../model/collections";
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';


@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.css']
})
export class PreferenceComponent implements OnInit {

  customer : Customer = new Customer('Guest', 'guest@mail.com', null, 'red');
  bgcolor : string = this.customer.favoriteColor;

  preferenceForm : FormGroup;
  name : FormControl;
  colorList : string[] = colorList;
  desertList : string[] = desertList;
  email : FormControl;
  deserts : FormArray;
  color : FormControl;
  

  constructor(private formBuilder : FormBuilder) { 

    this.name = formBuilder.control(this.customer.name);
    this.email = formBuilder.control(this.customer.email);
    this.deserts = formBuilder.array([]);
    this.color = formBuilder.control(this.customer.favoriteColor);
    

    this.preferenceForm = formBuilder.group({
      name : this.name,
      email : this.email,
      color : this.color,
      deserts : this.deserts
    });
  }

  ngOnInit() {
  }

  onCheckboxChange(e) {
    const deserts: FormArray = this.preferenceForm.get('deserts') as FormArray;
  
    if (e.target.checked) {
      deserts.push(new FormControl(e.target.value));
    } else {
       const index = deserts.controls.findIndex(x => x.value === e.target.value);
       deserts.removeAt(index);
    }
  }

  submit() {
    console.log(JSON.stringify(this.preferenceForm.value));
    console.log(this.preferenceForm.value.color);
    this.bgcolor = this.preferenceForm.value.color;
    this.customer.name = this.preferenceForm.value.name;
    this.customer.email = this.preferenceForm.value.email;
    this.customer.favoriteColor = this.preferenceForm.value.color;
    this.customer.deserts = this.preferenceForm.value.deserts;
  }

}
