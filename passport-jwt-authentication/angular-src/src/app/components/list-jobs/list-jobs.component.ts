import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {


  user:any;

   constructor( private authservice: AuthService , private router: Router) { }

  ngOnInit(): void {

  }

  getList(){
    debugger
    this.authservice.getJobs().subscribe(data=>{
      this.user = data;
      console.log(data)
    },
    err => {
      console.log(err);
      return false;
    })
  }

}
