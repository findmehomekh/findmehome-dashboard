import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PropertyService } from '../../services/property.service';
import { UploadImageService } from '../../services/upload-image.service';
import { BuildingService } from '../../services/building.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css']
})
export class PropertyFormComponent implements OnInit {

  constructor(
    private propertyService: PropertyService,
    private uploadImageService: UploadImageService,
    private buildingService: BuildingService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.buildingService.getAllBuuilding().subscribe((res: any)=>{
      this.allBuildings = res;
      // console.log(this.allBuildings);
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

  seletedFile!: File[];
  registeredPropertyId!: string;
  allBuildings!: any;
  

  propertyRegister = new FormGroup({
    buildingCode: new FormControl('Selete Building'),
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

  async register():Promise<void> {
    // console.log(this.propertyRegister.value);
    this.propertyService.addNewProperty(
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
      this.registeredPropertyId = res.id;
      console.log(this.registeredPropertyId);
      console.log(this.seletedFile);
      this.uploadImageService.uploadImage(this.registeredPropertyId, this.seletedFile).subscribe((resImg)=>{
        console.log(resImg);
        this.resetPage();
      });
    });
  }

  onChangeCheck(obj: boolean, $event: any){
    obj = $event.target.checked;
  }

  onSeletedFile($event: any){
    this.seletedFile = <File[]> $event.target.files;
    // console.log(this.seletedFile);
  }

  resetPage(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigateByUrl('/properties/property-list');
  }



  



}
