import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LandlordService {

  constructor(private http: HttpClient, private injector: Injector) { }

  url = 'http://139.59.238.27/api/landlords';
  access_token = this.injector.get(AuthService).getToken();
  httpHeader = new HttpHeaders({
    'Authorization': `${this.access_token}`
  });


  //getAllLandlordData
  getAllLandlords() {
    return this.http.get(this.url, { headers: this.httpHeader });
  }

  addNewLandlord(
    code: string,
    username: string,
    phoneNumber: string,
  ) {
    const data = {
      'code': code,
      'username': username,
      'phoneNumber': [phoneNumber],
    }
    return this.http.post(this.url, data, {headers: this.httpHeader});
  }

  updateLandlord(
    id: string,
    code: string,
    username: string,
    phoneNumber: string
  ) {
    const updateUrl = `http://139.59.238.27/api/landlords/${id}`
    const data = {
      'code': code,
      'username': username,
      'phoneNumber': [phoneNumber]
    }
    return this.http.put(updateUrl, data, {headers: this.httpHeader});
  }

  deleteLandlord(id: string) {
    const deleteUrl = `http://139.59.238.27/api/landlords/${id}`
    return this.http.delete(deleteUrl, {headers: this.httpHeader});
  }

}
