import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PropertyService } from '../../services/property.service';
import { BuildingService } from '../../services/building.service';

@Component({
  selector: 'app-property-update-form',
  templateUrl: './property-update-form.component.html',
  styleUrls: ['./property-update-form.component.css']
})
export class PropertyUpdateFormComponent implements OnInit {

  constructor(
    private propertyService: PropertyService,
    private buildingService: BuildingService
  ) { }

  @Input()
  currentPropery: any

  allBuildings: any

  ngOnInit(): void {
    this.buildingService.getAllBuuilding().subscribe((res: any)=>{
      this.allBuildings = res;
    })
    
  }

  isActive: boolean = true;
  isWifi: boolean = false;
  isCctv: boolean = false;
  isTv: boolean = false;
  isBalcony: boolean = false;
  isAc: boolean = false;
  isFan: boolean = false;
  isFridge: boolean =false;
  isWashingMachine: boolean = false;

  onChangeCheck(obj: boolean, $event: any){
    obj = $event.target.checked;
  }

  propertyRegister = new FormGroup({
    buildingCode: new FormControl(''),
    avaiableDate: new FormControl(''),
    code: new FormControl(''),
    name: new FormControl(''),
    slug: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    floor: new FormControl(''),
    maxGuest: new FormControl(''),
    size: new FormControl(''),
    numBed: new FormControl(''),
    numBedRoom: new FormControl(''),
    numBathRoom: new FormControl(''),
    numKitchen: new FormControl(''),
    washingMachine: new FormControl(''),
    fridge: new FormControl(''),
    wifi: new FormControl(''),
    securityCam: new FormControl(''),
    airConditioner: new FormControl(''),
    fan: new FormControl(''),
    tv: new FormControl(''),
    balcony: new FormControl(''),
    isActive: new FormControl('')
  })

  update():void {
    this.propertyRegister.value['price'] = this.propertyRegister.value['price'] == "" ? this.currentPropery.price : this.propertyRegister.value['price'];
    this.propertyRegister.value['floor'] = this.propertyRegister.value['floor'] == "" ? this.currentPropery.floor : this.propertyRegister.value['floor'];
    this.propertyRegister.value['maxGuest'] = this.propertyRegister.value['maxGuest'] == "" ? this.currentPropery.maxGuest : this.propertyRegister.value['maxGuest'];
    this.propertyRegister.value['size'] = this.propertyRegister.value['size'] == "" ? this.currentPropery.size : this.propertyRegister.value['size'];
    this.propertyRegister.value['numBedRoom'] = this.propertyRegister.value['numBedRoom'] == "" ? this.currentPropery.bedroom : this.propertyRegister.value['numBedRoom'];
    this.propertyRegister.value['numBathRoom'] = this.propertyRegister.value['numBathRoom'] == "" ? this.currentPropery.bathroom : this.propertyRegister.value['numBathRoom'];
    this.propertyRegister.value['numKitchen'] = this.propertyRegister.value['numKitchen'] == "" ? this.currentPropery.kitchen : this.propertyRegister.value['numKitchen'];
    this.propertyRegister.value['numBed'] = this.propertyRegister.value['numBed'] == "" ? this.currentPropery.bed : this.propertyRegister.value['numBed'];
    this.propertyRegister.value['description'] = this.propertyRegister.value['description'] == "" ? this.currentPropery.description : this.propertyRegister.value['description'];
    this.propertyRegister.value['code'] = this.propertyRegister.value['code'] == "" ? this.currentPropery.code : this.propertyRegister.value['code'];
    this.propertyRegister.value['buildingCode'] = this.propertyRegister.value['buildingCode'] == "" ? this.currentPropery.building : this.propertyRegister.value['buildingCode'];

    console.log(this.currentPropery.id);

    this.propertyService.updateProperty(
      this.currentPropery.id,
      this.propertyRegister.value['price'],
      this.propertyRegister.value['floor'],
      this.propertyRegister.value['maxGuest'],
      this.propertyRegister.value['size'],
      this.propertyRegister.value['numBedRoom'],
      this.propertyRegister.value['numBathRoom'],
      this.propertyRegister.value['numKitchen'],
      this.propertyRegister.value['numBed'],
      this.propertyRegister.value['description'],
      this.propertyRegister.value['code'],
      this.propertyRegister.value['code'],
      this.propertyRegister.value['buildingCode'],
      this.isActive,
      this.isWifi,
      this.isCctv,
      this.isAc,
      this.isBalcony,
      this.isTv,
      this.isFridge,
      this.isWashingMachine
    ).subscribe((res: any)=>{
      console.log(res);
    })
    // console.log(this.propertyRegister.value);
  }

}
