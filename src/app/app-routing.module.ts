import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandlordsComponent } from './landlords/landlords.component';
import { PropertiesComponent } from './properties/properties.component';
import { BookingsComponent } from './bookings/bookings.component';
import { LandlordFormComponent } from './landlords/landlord-form/landlord-form.component';
import { LandlordListComponent } from './landlords/landlord-list/landlord-list.component';
import { PropertyListComponent } from './properties/property-list/property-list.component';
import { PropertyFormComponent } from './properties/property-form/property-form.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { BuildingListComponent } from './buildings/building-list/building-list.component';
import { BuildingFormComponent } from './buildings/building-form/building-form.component';

const routes: Routes = [
  {path: 'landlords', component: LandlordsComponent, children: [
    {path: 'landlord-list', component: LandlordListComponent},
    {path: 'landlord-form', component: LandlordFormComponent}
  ]},
  {path: 'properties', component: PropertiesComponent, children: [
    {path: 'property-list', component: PropertyListComponent},
    {path: 'property-form', component: PropertyFormComponent}
  ]},
  {path: 'buildings', component: BuildingsComponent, children:[
    {path: 'building-list', component: BuildingListComponent},
    {path: 'building-form', component: BuildingFormComponent}
  ]},
  {path: 'bookings', component: BookingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
