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
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { BuildingUpdateFormComponent } from './buildings/building-update-form/building-update-form.component';
import { PropertyUpdateFormComponent } from './properties/property-update-form/property-update-form.component';
import { UploadImageService } from './services/upload-image.service';
import { PropertyDetailsComponent } from './properties/property-details/property-details.component';
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
    UserComponent,
    SignInComponent,
    SignUpComponent,
    BuildingUpdateFormComponent,
    PropertyUpdateFormComponent,
    PropertyDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    BuildingService,
    LandlordService,
    PropertyService,
    UserService,
    AuthService,
    AuthGuard,
    UploadImageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
