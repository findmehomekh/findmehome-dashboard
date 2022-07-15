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
import { LandlordUpdateFormComponent } from './landlords/landlord-update-form/landlord-update-form.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: 'sign-in', component: SignInComponent},
  {path: 'landlords', component: LandlordsComponent, children: [
    {path: 'landlord-list', component: LandlordListComponent, canActivate: [AuthGuard], children: [
      {path: 'landlord-update-form', component: LandlordUpdateFormComponent, canActivate: [AuthGuard]}
    ]},
    {path: 'landlord-form', component: LandlordFormComponent},
  ], canActivate: [AuthGuard]},
  {path: 'properties', component: PropertiesComponent, children: [
    {path: 'property-list', component: PropertyListComponent, canActivate: [AuthGuard]},
    {path: 'property-form', component: PropertyFormComponent, canActivate: [AuthGuard]},
  ], canActivate: [AuthGuard]},
  {path: 'buildings', component: BuildingsComponent, children:[
    {path: 'building-list', component: BuildingListComponent, canActivate: [AuthGuard]},
    {path: 'building-form', component: BuildingFormComponent, canActivate: [AuthGuard]}
  ], canActivate: [AuthGuard]},
  {path: 'bookings', component: BookingsComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
