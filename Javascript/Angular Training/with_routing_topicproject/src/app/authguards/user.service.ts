import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router : Router) { }

  isLoggedIn() {

    console.log(localStorage.getItem('token'));
    console.log('local storage token ::: ' + !! localStorage.getItem('token'));
    return !! localStorage.getItem('token');
  }

  logout()
  {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

}
