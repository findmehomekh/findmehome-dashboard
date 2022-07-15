import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Landlord } from '../models/landlord.model';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  constructor(private http: HttpClient, private injector: Injector) { }

  url = 'http://139.59.238.27/api/buildings'
  access_toekn = this.injector.get(AuthService).getToken();
  httpHeader = new HttpHeaders({
    'Authorization': `${this.access_toekn}`
  })
  
  getAllBuuilding(){
    return this.http.get(this.url);
  }

  addNewBuilding(
    waterPrice: number,
    electricityPrice: number,
    parking: string,
    curfew: string,
    description: string,
    code: string,
    location: string,
    name: string,
    landlord: string,
    bookingFee: string,
    contractAndTerms: string
  ){
    const data = {
      'waterPrice': waterPrice,
      'electricityPrice': electricityPrice,
      'parking': parking,
      'curfew': curfew,
      'description': description,
      'code': code,
      'location': location,
      'name': name,
      'landlord': landlord,
      'bookingFee': bookingFee,
      'contractAndTerms': contractAndTerms
    }
    return this.http.post(this.url, data, {headers: this.httpHeader})
  }

  deleteBuilding(id: string){
    const deleteUrl = `http://139.59.238.27/api/buildings/${id}`;
    return this.http.delete(deleteUrl, {headers: this.httpHeader});
  }

  updateBuilding(
    id: string,
    waterPrice: number,
    electricityPrice: number,
    parking: string,
    curfew: string,
    description: string,
    code: string,
    location: string,
    name: string,
    landlord: string,
    bookingFee: string,
    contractAndTerms: string
  ){
    const data = {
      'waterPrice': waterPrice,
      'electricityPrice': electricityPrice,
      'parking': parking,
      'curfew': curfew,
      'description': description,
      'code': code,
      'location': location,
      'name': name,
      'landlord': landlord,
      'bookingFee': bookingFee,
      'contractAndTerms': contractAndTerms
    }
    const deleteUrl = `http://139.59.238.27/api/buildings/${id}`;
    return this.http.put(deleteUrl, data, {headers: this.httpHeader});
  }
}
