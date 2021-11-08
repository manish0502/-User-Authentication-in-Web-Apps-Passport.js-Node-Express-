import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient ,HttpHeaders ,HttpParams}   from '@angular/common/http'
import { Login , User ,Job} from '../models'

interface logoutStatus{
  success:boolean 
}

const BASE_URL ='http://localhost:5000/api/v1/auth'


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  authToken: any;
  user: User;
  results: any;

  private loggedInStatus=false // this is when we were setting up the auth guard
 //private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  
  constructor(private http:HttpClient) { }


  setLoggedIn(value:boolean) {

    this.loggedInStatus =value;
  //  localStorage.setItem('loggedIn' ,'true')

  }

  get isLoggedIn() {
    
    return this.loggedInStatus; // only in auth guard
    //return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

//   registerEmployee(body:Employee):Observable<Employee[]>{
     
//     return this.http.post<Employee[]>(`${BASE_URL}/employee`, body ,{
//       observe:'body',
//       headers: new HttpHeaders().append('Content-Type', 'application/json')
//     });

//   }

//   logout(){
    
//    // window.localStorage.removeItem('loggedIn');
//    // localStorage.removeItem('loggedIn');
//     return this.http.get<logoutStatus>(`http://localhost:5000/api/logout`);

//   }

  registerUser(body:User):Observable<User[]>{
     
    return this.http.post<User[]>(`${BASE_URL}/register`, body ,{
      observe:'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });

  }


  LoginEmployee(body:Login):Observable<Login[]>{
     
    return this.http.post<Login[]>(`${BASE_URL}/login`, body ,{
      observe:'body',
      withCredentials:true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });

  }


  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }


  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }


  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }


  CreateJob(body:Job):Observable<Job[]>{

    const URL ='http://localhost:5000/api/v1'
    this.loadToken();
    return this.http.post<Job[]>(`${URL}/jobs`, body ,{
      observe:'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });

  }
  

//   getByEmployeeId(id){
    
//     return this.http.get<Employee>(`${BASE_URL}/employee/${id}`);

  //}

//   getEmployeeList():Observable<Employee[]>{
    
//     return this.http.get<Employee[]>(`${BASE_URL}/employee`);

//   }


//   updateEmploye(emp:Employee){

//     return this.http.put<Employee[]>(`${BASE_URL}/employee/${emp._id}`, emp);

//   }

//   deleteEmployee(id:string):Observable<Employee[]>{
    
//     return this.http.delete<Employee[]>(`${BASE_URL}/employee/${id}`);

//   }



}