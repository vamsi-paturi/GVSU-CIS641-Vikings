import { Injectable } from '@angular/core';
import { RestRequest } from './res-request';
//import { Router , CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private restRequest: RestRequest, 
    //private route : ActivatedRouteSnapshot
    ) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('currentSession');
    const user_type = localStorage.getItem('type')
    //const role  = this.route.data.role;
    // if (token) {
    //   if (user_type == role){
    //     return true;
    //   }else{
    //     return false
    //   }
        
    // }
    if(token){
      return true
    }
    return false;
}

}
