import { Component, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-landlord-list',
  templateUrl: './landlord-list.component.html',
  styleUrls: ['./landlord-list.component.css']
})
export class LandlordListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tableHeader = [
    '#',
    'Firstname',
    'Lastname',
    'Phone Number',
    'Number of Building',
    'Number of Property',
    'Action'
  ]

}
