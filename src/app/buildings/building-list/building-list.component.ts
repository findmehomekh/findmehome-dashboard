import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Building } from '../../models/building.model';
import { Time } from '@angular/common';
import { BuildingService } from '../../services/building.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css']
})
export class BuildingListComponent implements OnInit {

  constructor(private buildingService: BuildingService, private router: Router) { }

  currentBuilding: any;

  ngOnInit(): void {
    this.getAllBuilding();
  }

  now = new Date().toLocaleTimeString();
  allBuildings: any;

  tableHeader: any[] = [
    'Building code', 
    'Owner Code', 
    'Curfew', 
    'Parking fee', 
    'Water fee',
    'Electricity fee',
    'Booking fee',
    'Contract & terms',
    'latitude',
    'longitude',
    'location',
    'Action',
  ]

  getAllBuilding(){
    this.buildingService.getAllBuuilding().subscribe((res: any)=>{
      this.allBuildings = res;
      console.log(this.allBuildings)
    })
  }

  deleteBuilding(id: string){
    this.buildingService.deleteBuilding(id).subscribe((res: any)=>{
      console.log(res);
      this.resetPage();
    })
  }

  resetPage(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigateByUrl('/buildings/building-list');
  }

  getCurrentBuilding(building: any){
    this.currentBuilding = building
  }



}
