import { Component, OnInit ,ViewChild, Input} from '@angular/core';
import { User } from '../../models'
import { AuthService } from '../../services'
import { NgForm } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   success:any
  entryForm:NgForm;
  
  public registerConfigs: User;


  constructor(

    private titleService:Title , 
    private authservice:AuthService ,
    private router: Router,

    ) { 

    this.titleService.setTitle("Registration");
  }

  ngOnInit(): void {

    this.registerConfigs = new User();
   

  }


  


 


  onRegisterSubmit(){



    this.authservice.registerUser(this.registerConfigs).subscribe(res => {

      if(res){
       console.log(res)
       this.router.navigate(['/login']);
      }
      else{
        this.router.navigate(['/register']);
      }
    })
    

  }



}
