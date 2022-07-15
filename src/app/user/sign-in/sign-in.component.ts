import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(data: any){
    this.userService.login(data).subscribe((res: any)=>{
      if(res){
        localStorage.setItem('token', res.access_token);
        this.router.navigate(['landlords/landlord-list']);
      }else{
        this.router.navigate(['sign-in']);
      }
    });
  }

}
