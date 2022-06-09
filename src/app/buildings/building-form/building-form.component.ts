import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

declare const L:any;

@Component({
  selector: 'app-building-form',
  templateUrl: './building-form.component.html',
  styleUrls: ['./building-form.component.css']
})
export class BuildingFormComponent {

  isDisplayMap:boolean = false;
  isDisplayLatLong = false

  constructor() { }

  buildingRegister = new FormGroup({
    owner: new FormControl(''),
    code: new FormControl(''),
    buildingName: new FormControl(''),
    slug: new FormControl(''),
    description: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl(''),
    location: new FormControl(''),
    waterPrice: new FormControl(''),
    electricityPrice: new FormControl(''),
    parkingPrice: new FormControl(''),
    curfew: new FormControl(''),
    bookingFee : new FormControl(''),
    contractAndTerms: new FormControl('')
  })

  getCurrentLocation(): void{
    this.isDisplayMap = true
    this.isDisplayLatLong = false
    if(!navigator.geolocation){
      alert('Location service is not support');
    }else{
      navigator.geolocation.getCurrentPosition((position)=>{
        const coords = position.coords;
        let mapGetLocation = L.map('map').setView([coords.latitude, coords.longitude], 15);
        L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2hhbm51ZGFtIiwiYSI6ImNsNDAwNWd3NzFudWczaW56ZGoxaXZ6NXUifQ.xtELSYtXgODw2ldkI_sCIQ',
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'your.mapbox.access.token',
        }
      ).addTo(mapGetLocation);
      var marker = L.marker([coords.latitude, coords.longitude]).addTo(mapGetLocation);
      console.log(`lat: ${coords.latitude} long: ${coords.longitude}`);
      this.buildingRegister.value['latitude'] = coords.latitude.toString();
      this.buildingRegister.value['longitude'] = coords.longitude.toString();
      });
    }
    console.log('OK')
  }

  addLocation(){
    this.isDisplayMap = false
    this.isDisplayLatLong = true;
  }

  register(){
    console.log(this.buildingRegister.value)
  }

}
