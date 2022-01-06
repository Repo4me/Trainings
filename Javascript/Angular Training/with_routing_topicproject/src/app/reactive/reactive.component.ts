import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  name:FormControl;
  password:FormControl;
  fg:FormGroup;
  constructor() {
    this.name = new FormControl('',
    [Validators.required, 
      Validators.minLength(5)],);
    
      this.password = new FormControl('pass',
      [Validators.pattern('\\d+'),
      Validators.required]);

    console.log(this.name);
    this.fg = new FormGroup({
      name:this.name,
      password:this.password
    });
   }

  ngOnInit(): void {
  }

}
