import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'angular';

  constructor(private router:Router){

  }

  ngOnInit():void{

     
  }
  getProtected(){
    this.router.navigate(['protected'])
  }

  signIn(){
    this.router.navigate(['login'])
  }

}

