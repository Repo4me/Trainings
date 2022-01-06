import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
//   template:`
//   <div class='container-fluid text-center footer'>
//     <h2>&copy; Shalini Mittal - 2020 !!!</h2>
// </div>
//   `,
//   styles:[
//     `
//     .footer{
//       background-color:yellow;
//       padding:30px;
//     }
//     `
//  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
