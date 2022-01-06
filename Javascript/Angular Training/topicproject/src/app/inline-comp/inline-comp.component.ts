import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-comp',
  template:`
  <div class='container-fluid text-center footer'>
    <h2>Inline component with html and css !!!</h2>
</div>
  `,
  styles:[
    `
    .footer{
      background-color:yellow;
      padding:30px;
    }
    `
  ]
})
export class InlineCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
