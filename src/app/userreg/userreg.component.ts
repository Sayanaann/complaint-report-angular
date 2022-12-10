import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent {
  name=""
  address=""
  mobno=""
  emailid=""
  username=""
  password=""
  confirmpassword=""
  
  constructor( private api:ApiService,private route:Router){}


  reg=()=>
  {
let data : any ={ "name":this.name,"address":this.address,"mobno":this.mobno,"emailid":this.emailid,
"username":this.username,
"password":this.password,
"confirmpassword":this.confirmpassword

}
if(this.password==this.confirmpassword){
  this.api.adduser(data).subscribe(

    (response: any)=>{
      console.log(response)
      alert("registration successfull")
      this.name=""
      this.address=""
      this.mobno=""
      this.emailid=""
      this.username=""
      this.password=""
      this.confirmpassword=""   
    })
  }else{
    alert("password & confirm password doesn't match,try again")
    this.password=""
    this.confirmpassword=""
  }
   

}

}
