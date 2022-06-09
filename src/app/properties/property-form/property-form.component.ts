import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css']
})
export class PropertyFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  propertyRegister = new FormGroup({

  })

  register():void {
    console.log(this.propertyRegister.value);
  }

}
