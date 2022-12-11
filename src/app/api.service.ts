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
  getuser=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/getuser",dataToSend)
  }
  addcomplaint=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addcomplaint",dataToSend)
  }
  viewusercomplaint=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/mycomplaints",dataToSend)
  }
  viewallcomplaint=()=>
  {
     return this.http.get("http://localhost:8080/viewallcomplaints")
  }
}
