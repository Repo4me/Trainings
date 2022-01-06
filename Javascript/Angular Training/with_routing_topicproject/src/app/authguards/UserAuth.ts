import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable ({
    providedIn : 'root'
})

export class UserCanActivate implements CanActivate {
    
    constructor(private service : UserService, private router : Router) {}

    canActivate() {
        if(this.service.isLoggedIn()) {
            console.log('can activate guarding ...');
            return true; // If false, doesn't allow url to be accessed.
        } else {
            console.log('can activate else')
            this.router.navigate(['/login']);
            return true;
        }
    }
}