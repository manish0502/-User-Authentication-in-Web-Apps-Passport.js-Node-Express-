import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient ,HttpHeaders ,HttpParams}   from '@angular/common/http'
import {  User} from '../models'
import { map } from "rxjs/operators"; 


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
    }).pipe(map((res: any) => res));


  }


  loginUser(user:User):Observable<any[]>{
    return this.http.post<User[]>(`${BASE_URL}/login`, user ,{
      observe:'body',
      withCredentials:true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }).pipe(map((res: any) => res));;

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

  getJobs():Observable<any[]> {
    debugger
    let headers = new HttpHeaders();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get<any[]>('http://localhost:5000/api/v1/jobs', {headers: headers})
    
  }

  


 




}