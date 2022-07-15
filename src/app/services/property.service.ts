import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient, private injector: Injector) { }

  url = 'http://139.59.238.27/api/properties';
  access_token = this.injector.get(AuthService).getToken();
  httpHeader = new HttpHeaders({
    'Authorization': `${this.access_token}`
  })

  getAllProperty(){
    return this.http.get(this.url, {headers: this.httpHeader});
  }

  addNewProperty(
    price: number,
    floor: number,
    maxGuest: number,
    size: string,
    bedroom: number,
    bathroom: number,
    kitchen: number,
    bed: number,    
    description: string,
    name: string,
    code: string,
    building: string,
    active: boolean,
    wifi: boolean,
    securityCam: boolean,
    airConditioner: boolean,
    balcony: boolean,
    tv: boolean,
    fridge: boolean,
    washingMachine: boolean
  ){
    const data = {
      'price': price,
      'floor': floor,
      'maxGuest': maxGuest,
      'size': size,
      'bedroom': bedroom,
      'bathroom': bathroom,
      'kitchen': kitchen,
      'bed': bed,
      'description': description,
      'name': name,
      'code': code,
      'building': building,
      'active': active,
      'wifi': wifi,
      'securityCam': securityCam,
      'airConditioner': airConditioner,
      'balcony': balcony,
      'TV': tv,
      'fridge': fridge,
      'washingMachine': washingMachine,
      'category': "072ce8e0-6ba9-4150-9523-8da3424322b2"
    }
    console.log(data);
    return this.http.post(this.url, data, {headers: this.httpHeader});
  }

  updateProperty(
    id: string,
    price: number,
    floor: number,
    maxGuest: number,
    size: string,
    bedroom: number,
    bathroom: number,
    kitchen: number,
    bed: number,    
    description: string,
    name: string,
    code: string,
    building: string,
    active: boolean,
    wifi: boolean,
    securityCam: boolean,
    airConditioner: boolean,
    balcony: boolean,
    tv: boolean,
    fridge: boolean,
    washingMachine: boolean
  ){
    const data = {
      'price': price,
      'floor': floor,
      'maxGuest': maxGuest,
      'size': size,
      'bedroom': bedroom,
      'bathroom': bathroom,
      'kitchen': kitchen,
      'bed': bed,
      'description': description,
      'name': name,
      'code': code,
      'building': building,
      'active': active,
      'wifi': wifi,
      'securityCam': securityCam,
      'airConditioner': airConditioner,
      'balcony': balcony,
      'TV': tv,
      'fridge': fridge,
      'washingMachine': washingMachine,
      'category': "072ce8e0-6ba9-4150-9523-8da3424322b2"
    }
    console.log(data);
    const updateUrl = `http://139.59.238.27/api/properties/${id}`;
    return this.http.put(updateUrl, data, {headers: this.httpHeader});
  }

  deleteProperty(id: string){
    const deleteUrl = `http://139.59.238.27/api/properties/${id}`;
    return this.http.delete(deleteUrl, {headers: this.httpHeader});
  }





}
