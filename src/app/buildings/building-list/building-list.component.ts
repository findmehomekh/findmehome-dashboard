import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Building } from '../../models/building.model';
import { Time } from '@angular/common';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css']
})
export class BuildingListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  now = new Date().toLocaleTimeString();

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

  buildingList: Building[] = [
    {
      owner: 'LLYCD001',
      code: 'B001',
      name: '001',
      slug: '001',
      description: 'N/A',
      location: 'N/A',
      latitude: 0,
      longitude: 0,
      waterPrice: 1000,
      electricityPrice: 1000,
      parkingPrice: 0,
      bookingFee: 0,
      contractAndTerms: 'N/A',
      curfew: this.now
    },
    {
      owner: 'LLYCD002',
      code: 'B002',
      name: '001',
      slug: '001',
      description: 'N/A',
      location: 'N/A',
      latitude: 0,
      longitude: 0,
      waterPrice: 1000,
      electricityPrice: 1000,
      parkingPrice: 0,
      bookingFee: 0,
      contractAndTerms: 'N/A',
      curfew: this.now
    }
  ]

}
