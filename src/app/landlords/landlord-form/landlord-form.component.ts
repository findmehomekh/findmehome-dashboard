import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

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
    code: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    phoneNumber: new FormControl('')
  });

  register(): void{
    console.log(this.landlordRegister.value);
  }

}
