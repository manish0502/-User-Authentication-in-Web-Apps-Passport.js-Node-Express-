import { Component, OnInit ,ViewChild, Input} from '@angular/core';
import { User } from '../../models'
import { AuthService } from '../../services'
import { NgForm } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  public loginConfigs: User;


  constructor(

    private titleService:Title , 
    private authservice:AuthService ,
    private router: Router,
    private flashMessage:FlashMessagesService

    ) { 

    this.titleService.setTitle("Login");
  }

  ngOnInit(): void {

    this.loginConfigs = new User();
   

  }


  


 


  onLoginSubmit(){



    this.authservice.loginUser(this.loginConfigs).subscribe(res => {

      if(res) {
       console.log(res)
       this.authservice.storeUserData(res['token'], res['user']);
       this.flashMessage.show('You are now logged in', {cssClass: 'alert-success', timeout: 5000});
       this.router.navigate(['/dashboard']);
      }
      else{
        this.router.navigate(['/login']);
      }
    })
    

  }



}
