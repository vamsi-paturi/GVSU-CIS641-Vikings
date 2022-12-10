import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router , CanActivate } from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(public auth: AuthService, public router: Router) { }
    canActivate(): boolean {
        const user_type = localStorage.getItem('type')
    //const role  = route.data.role;
        if (!this.auth.isAuthenticated()) {
            
            // this.router.navigate(['auth/login']);
            // return false;
        } else {
            // if (user_type == role){
            //     return true;
            //   }else{
            //     this.router.navigate(['auth/login']);
            //     return false;
            //   }
            
        }
        return true;
    }
}