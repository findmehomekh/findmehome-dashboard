import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Landlord } from '../../models/landlord.model';
import { LandlordService } from '../../services/landlord.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landlord-update-form',
  templateUrl: './landlord-update-form.component.html',
  styleUrls: ['./landlord-update-form.component.css']
})
export class LandlordUpdateFormComponent implements OnInit {

  constructor(private landlordService: LandlordService, private router: Router) { }

  @Input()
  landlord!: Landlord;

  ngOnInit(): void {
    
  }

  registerLandlord(item: any): void{
    console.log(item);
  }

  reset(form: NgForm):void {
    form.resetForm();
  }

  landlordRegister = new FormGroup({
    code: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required])
  });

  updateLandlord(): void{
    if(this.landlord.id){
      this.landlordRegister.value['code'] = this.landlordRegister.value['code'] == "" ? this.landlord.code : this.landlordRegister.value['code'];
      this.landlordRegister.value['username'] = this.landlordRegister.value['username'] == "" ? this.landlord.username : this.landlordRegister.value['username'];
      this.landlordRegister.value['phoneNumber'] = this.landlordRegister.value['phoneNumber'] == "" ? this.landlord.phoneNumber : this.landlordRegister.value['phoneNumber'];
      this.landlordService.updateLandlord(
        this.landlord.id,
        this.landlordRegister.value['code'],
        this.landlordRegister.value['username'],
        this.landlordRegister.value['phoneNumber']
      ).subscribe((res)=>{
        console.log(res);
      })
      this.router.navigateByUrl('/landlords/landlord-list');
    }else{
      alert('Password is not match, Please try again')
    }
  }

  
  public get code() {
    return this.landlordRegister.get('code');
  }

  public get username(){
    return this.landlordRegister.get('username');
  }

  public get password(){
    return this.landlordRegister.get('password');
  }

  public get confirmPassword(){
    return this.landlordRegister.get('confirmPassword');
  }
  
  public get phoneNumber(){
    return this.landlordRegister.get('phoneNumber');
  }

  resetPage(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigateByUrl('/landlords/landlord-list');
  }
  

}
