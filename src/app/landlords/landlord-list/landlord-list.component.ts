import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { LandlordService } from '../../services/landlord.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landlord-list',
  templateUrl: './landlord-list.component.html',
  styleUrls: ['./landlord-list.component.css']
})
export class LandlordListComponent implements OnInit {

  constructor(private landlordService: LandlordService, private router: Router) { }

  currentLandlord: any;
  allLandlords: any;

  ngOnInit(): void {
    this.getAllLandlords();
  }

  tableHeader = [
    '#',
    'Username',
    'Phone Number',
    'Number of Building',
    'Number of Property',
    'Action'
  ]

  resetPage(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigateByUrl('/landlords/landlord-list');
  }


  getAllLandlords(){
    this.landlordService.getAllLandlords().subscribe((res: any)=>{
      this.allLandlords = res.items;
    })
  }

  deleteLandlordClicked(id: string){
    this.landlordService.deleteLandlord(id).subscribe((res)=>{
      if(res){
        console.log(res);
        this.resetPage();
      }else{
        console.warn('delete error')
      }
    })

  }

  getCurrentLandlordID(landlord: any){
    this.currentLandlord = landlord;
    // console.log(this.currentLandlord);
  }

  

  



 

}
