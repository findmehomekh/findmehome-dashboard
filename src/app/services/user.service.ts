import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://139.59.238.27/api/users/login';
  headers = new HttpHeaders().set('access-control-allow-origin',"*");
  constructor(private http: HttpClient) { }
  login(data: any){
    return this.http.post(this.url, data, {withCredentials: false, headers: this.headers});
  }


}
