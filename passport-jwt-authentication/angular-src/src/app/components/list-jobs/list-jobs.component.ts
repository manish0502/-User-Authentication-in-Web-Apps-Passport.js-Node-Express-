import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services';
import { Job } from '../../models'


@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {

  users:Job[]= []


   constructor( private authservice: AuthService , private router: Router) { }

  ngOnInit(): void {


  }

  getList(){
    debugger
    this.authservice.getAll().subscribe(data=>{

      this.users=data
      console.log(data)
    },
    err => {
      console.log(err);
      return false;
    })
  }

}
