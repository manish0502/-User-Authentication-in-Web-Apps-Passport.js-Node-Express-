import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient ,HttpHeaders ,HttpParams}   from '@angular/common/http'
import {  User} from '../models'



const BASE_URL ='http://localhost:5000/api/v1/auth'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any;
  user: any;
  
  constructor(private http:HttpClient) { }


  registerUser(user:User):Observable<any[]>{
    return this.http.post<User[]>(`${BASE_URL}/register`, user ,{
      observe:'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });

  }


  loginUser(user:User):Observable<any[]>{
    return this.http.post<User[]>(`${BASE_URL}/login`, user ,{
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

  


 


//   LoginEmployee(body:Login):Observable<Login[]>{
     
//     return this.http.post<Login[]>(`${BASE_URL}/login`, body ,{
//       observe:'body',
//       withCredentials:true,
//       headers: new HttpHeaders().append('Content-Type', 'application/json')
//     });

//   }

  

//   getByEmployeeId(id){
    
//     return this.http.get<Employee>(`${BASE_URL}/employee/${id}`);

//   }

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