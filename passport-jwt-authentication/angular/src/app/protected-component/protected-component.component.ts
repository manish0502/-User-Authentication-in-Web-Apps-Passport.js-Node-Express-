// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-protected-component',
//   templateUrl: './protected-component.component.html',
//   styleUrls: ['./protected-component.component.css']
// })
// export class ProtectedComponentComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { AuthService } from '../shared/services';
import { Login }  from '../shared/models'

@Component({
  selector: 'app-protected-component',
  templateUrl: './protected-component.component.html',
  styleUrls: ['./protected-component.component.css']
})
export class ProtectedComponentComponent implements OnInit {
  
  loginForm : FormGroup;
  user:Login

  constructor(private router: Router , private fb: FormBuilder , private authService:AuthService) { }

  ngOnInit(): void {

     this.createForm();

  }

  createForm(){
    this.loginForm = this.fb.group({
      _id: [''],
      email: ['m@gmail.com', Validators.required],
      password: ['qwerty'],
    })
  }


  onLogin(){

    if (this.loginForm.valid) {

    

     
      this.authService.LoginEmployee(this.loginForm.value).subscribe(
        data => {
          console.log(data);
          if(data){

           // localStorage.clearItem('loggedIn')
           this.authService.storeUserData(data['token'], data['user']);
           this.router.navigate(['protected']);


          }
          else{
            this.router.navigate(['/login']);
            //this.empService.setLoggedIn(true)
           // return this.ns.showSuccess("Login Sucessfully")
          }

        },
        (err) => {
          console.log(err);
          //return this.ns.showError("Something Wrong happened")

        }
      )
      this.onReset()
     

    }
    

  }

  onReset(){
    this.loginForm.reset();
  }


 

}