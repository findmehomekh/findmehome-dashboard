import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BuildingFormComponent } from './buildings/building-form/building-form.component';
import { BuildingListComponent } from './buildings/building-list/building-list.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { LandlordFormComponent } from './landlords/landlord-form/landlord-form.component';
import { LandlordListComponent } from './landlords/landlord-list/landlord-list.component';
import { LandlordsComponent } from './landlords/landlords.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyFormComponent } from './properties/property-form/property-form.component';
import { PropertyListComponent } from './properties/property-list/property-list.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BuildingService } from './services/building.service';
import { LandlordService } from './services/landlord.service';
import { PropertyService } from './services/property.service';
import { TotalRegisterChartComponent } from './landlords/total-register-chart/total-register-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandlordUpdateFormComponent } from './landlords/landlord-update-form/landlord-update-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    SideBarComponent,
    LandlordsComponent,
    PropertiesComponent,
    BookingsComponent,
    LandlordFormComponent,
    LandlordListComponent,
    PropertyListComponent,
    PropertyFormComponent,
    BuildingFormComponent,
    BuildingsComponent,
    BuildingListComponent,
    TotalRegisterChartComponent,
    LandlordUpdateFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    BuildingService,
    LandlordService,
    PropertyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
