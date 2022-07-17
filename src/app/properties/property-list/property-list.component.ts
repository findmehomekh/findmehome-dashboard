import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../services/property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor(
    private propertyService: PropertyService, private router: Router) { }

  allProperties: any
  currentProperty: any

  ngOnInit(): void {
    this.getAllProperties();
  }

  tableHeader = [
    '#',
    'Building code',
    'Price',
    'Floor',
    'Size',
    'Max guest',
    'Num bedroom',
    'Num kitchen',
    'Num bathroom',
    'Image',
    'Action'
  ];

  getAllProperties(){
    this.propertyService.getAllProperty().subscribe((res: any)=>{
      this.allProperties = res.items;
      // console.log(this.allProperties);
    })
  }

  deleteProperty(id: string){
    this.propertyService.deleteProperty(id).subscribe((res: any)=>{
      console.log(res);
      this.resetPage();
    })
  }

  resetPage(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigateByUrl('/properties/property-list');
  }

  getCurrentProperty(property: any){
    this.currentProperty = property;
    // console.log(this.currentProperty);
  }


}
