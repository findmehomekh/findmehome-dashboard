import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BuildingService } from '../../services/building.service';
import { Router } from '@angular/router';
import { LandlordService } from '../../services/landlord.service';

declare const L:any;

@Component({
  selector: 'app-building-form',
  templateUrl: './building-form.component.html',
  styleUrls: ['./building-form.component.css']
})
export class BuildingFormComponent implements OnInit{

  isDisplayMap:boolean = false;
  isDisplayLatLong = false
  allLandlords: any

  constructor(
    private buildingService: BuildingService, 
    private landlordService: LandlordService,
    private router: Router,
    ) { }
  ngOnInit(): void {
    this.getLandlordIds();
  }

  buildingRegister = new FormGroup({
    owner: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
    buildingName: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    latitude: new FormControl(''),
    longitude: new FormControl(''),
    location: new FormControl(''),
    waterPrice: new FormControl('', [Validators.required]),
    electricityPrice: new FormControl('', [Validators.required]),
    parkingPrice: new FormControl('', [Validators.required]),
    curfew: new FormControl('', [Validators.required]),
    bookingFee : new FormControl('', [Validators.required]),
    contractAndTerms: new FormControl('', [Validators.required])
  })

  public get owner(){
    return this.buildingRegister.get('owner');
  }

  public get code(){
    return this.buildingRegister.get('code');
  }

  public get buildingName(){
    return this.buildingRegister.get('buildingName');
  }

  public get description(){
    return this.buildingRegister.get('description');
  }

  public get waterPrice(){
    return this.buildingRegister.get('waterPrice');
  }

  public get electricityPrice(){
    return this.buildingRegister.get('electricityPrice');
  }

  public get parkingPrice(){
    return this.buildingRegister.get('parkingPrice');
  }

  public get curfew(){
    return this.buildingRegister.get('curfew');
  }

  public get bookingFee(){
    return this.buildingRegister.get('bookingFee');
  }

  public get contractAndTerms(){
    return this.buildingRegister.get('contractAndTerms');
  }


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
    
    this.buildingService.addNewBuilding(
      this.buildingRegister.value['waterPrice'],
      this.buildingRegister.value['electricityPrice'],
      this.buildingRegister.value['parkingPrice'],
      this.buildingRegister.value['curfew'],
      this.buildingRegister.value['description'],
      this.buildingRegister.value['code'],
      this.buildingRegister.value['location'],
      this.buildingRegister.value['code'],
      this.buildingRegister.value['owner'],
      this.buildingRegister.value['bookingFee'],
      this.buildingRegister.value['contractAndTerms']
    ).subscribe((res)=>{
      console.log(res);
      this.resetPage();
    })
    // console.log(this.buildingRegister.value);
  }

  getLandlordIds(){
    this.landlordService.getAllLandlords().subscribe((res: any)=>{
      this.allLandlords = res.items
    })
  }

  resetPage(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigateByUrl('/buildings/building-list');
  }



}
