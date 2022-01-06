import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { Contact } from '../model/contact';
import { countryList } from "../model/collection";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact : Contact;
  countries : string[] = countryList;

  contactForm : FormGroup;
  fName : FormControl;
  lName : FormControl;
  country : FormControl;
  subject : FormControl;

  constructor(private fb : FormBuilder) {
    this.contactForm = this.fb.group({
      fName : fb.control(''),
      lName : fb.control(''),
      subject : fb.control(''),
      country : fb.control('')
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

}
