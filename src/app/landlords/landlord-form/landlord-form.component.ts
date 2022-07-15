import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { LandlordService } from '../../services/landlord.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landlord-form',
  templateUrl: './landlord-form.component.html',
  styleUrls: ['./landlord-form.component.css',]
})
export class LandlordFormComponent implements OnInit {
  constructor(private landlordService: LandlordService, private router: Router) { }

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

  register(): void{
    if(this.landlordRegister.value['code']){
      this.landlordService.addNewLandlord(
        this.landlordRegister.value['code'],
        this.landlordRegister.value['username'],
        this.landlordRegister.value['phoneNumber']
      ).subscribe((res)=>{
        if(res){
          console.log(res);
          this.router.navigateByUrl('/landlords/landlord-list');
        }else{
          alert('Add New Landlord is Fail!')
        }
      })
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

}
