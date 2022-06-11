import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-landlord-form',
  templateUrl: './landlord-form.component.html',
  styleUrls: ['./landlord-form.component.css',]
})
export class LandlordFormComponent implements OnInit {
  constructor() { }

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
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    username: new FormControl('', [Validators.required]),
    email: new FormControl(''),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required])
  });

  register(): void{
    if(this.landlordRegister.value['password'] === this.landlordRegister.value['confirmPassword']){
      console.log(this.landlordRegister.value);
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
