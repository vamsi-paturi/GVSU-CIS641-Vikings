import { Injectable } from '@angular/core';
import { RestRequest } from '../../core/res-request';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private restRequest: RestRequest, private http: HttpClient) {}
  AdminTaxilogin(obj) {
    let response1 = this.restRequest.post('Adminlogin', obj);
    let response2 = this.restRequest.post('Taxi_user_login', obj);
    return forkJoin([response1, response2]);
  }
  Adminlogout(obj) {
    return this.restRequest.post('Adminlogout', obj);
  }
  resetpassword(obj) {
    return this.restRequest.post('Adminresetpassword', obj);
  }
  forgetpassword() {
    return this.restRequest.get('adminforgetpassword');
  }
  Taxilogin(obj) {
    return this.restRequest.post('Taxi_user_login', obj);
  }
  Adminlogin(obj) {
    return this.restRequest.post('auth', obj);
  }
  login(obj) {
    return this.restRequest.post('Adminlogin', obj);
  }
  register(obj) {
    return this.restRequest.post('users', obj);
  }
}
