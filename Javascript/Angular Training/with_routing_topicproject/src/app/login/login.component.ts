import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {'email' : '', 'password' : ''};

  constructor(private router : Router) { 
  }

  ngOnInit() {
  }

  login()
  {
      if(this.user.email== 'admin@mail.com' && this.user.password== 'admin')
      {
        localStorage.setItem('token','secret');
        this.router.navigate(['/create']);
      }
      else{
        this.router.navigate(['/login']);
      }
  }
}
