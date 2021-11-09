// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit ,ViewChild, Input} from '@angular/core';
import { User } from '../../models'
import { AuthService } from '../../services'
import { NgForm } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { Router } from '@angular/router';

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

    ) { 

    this.titleService.setTitle("Login");
  }

  ngOnInit(): void {

    this.loginConfigs = new User();
   

  }


  


 


  onLoginSubmit(){



    this.authservice.loginUser(this.loginConfigs).subscribe(res => {

      if(res){
       console.log(res)
       this.authservice.storeUserData(res['token'], res['user']);
       this.router.navigate(['/dashboard']);
      }
      else{
        this.router.navigate(['/login']);
      }
    })
    

  }



}
