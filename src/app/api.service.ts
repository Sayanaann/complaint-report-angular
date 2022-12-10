import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  userlogin=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/userlogin",dataToSend)
  }
  adduser=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/adduser",dataToSend)
  }
}
