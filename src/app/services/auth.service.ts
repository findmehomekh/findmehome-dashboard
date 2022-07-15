import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  helper = new JwtHelperService();
  token = this.getToken() === null ? undefined : this.getToken();

  constructor() { }
  loggedIn(){
    // const access_token = this.getToken();
    // return !this.helper.isTokenExpired(access_token);
    return localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
