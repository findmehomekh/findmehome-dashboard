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

  landlordList: any = [
    {
      code: 'LLYCD0011',
      username: 'yichandara',
      password: 'chandara123',
      email: 'chandarayi@gmail.com',
      firstname: 'Chandara',
      lastname: 'Yi',
      phoneNumber: '017701656'
    },
    {
      code: 'LLYCD0012',
      username: 'raychannudam',
      password: 'raychannudam123',
      email: 'channudamray@gmail.com',
      firstname: 'Channudam',
      lastname: 'Ray',
      phoneNumber: '092529987'
    }
  ]

}
