import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { AuthService } from '../shared/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registerForm : FormGroup;

  constructor(private router: Router , private fb: FormBuilder , private authService: AuthService) { }

  ngOnInit(): void {

     this.createForm();

  }

  createForm(){
    this.registerForm = this.fb.group({
      _id: [''],
      name: ['Ajay singh', Validators.required],
      email: ['aj@gmail.com', Validators.required],
      password: ['@#$NV&HD'],
    })
  }


  onRegister(){

    if (this.registerForm.valid) {
    

      
  
      this.authService.registerUser(this.registerForm.value).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['login'])
        },
        (err) => {
          console.log(err);

        }
      )
      this.onReset()


    }

  
  }

  onReset(){
    this.registerForm.reset();
  }


 

}
