import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent {
  name=""
  address=""
  phoneno=""
  emailid=""
  username=""
  password=""
  confirmpassword=""
  
  constructor( private api:ApiService,private route:Router){}


  reg=()=>
  {
let data : any ={ "name":this.name,"address":this.address,"phoneno":this.phoneno,"emailid":this.emailid,
"username":this.username,
"password":this.password,
"confirmpassword":this.confirmpassword

}
if(this.password==this.confirmpassword){
  this.api.adduser(data).subscribe(

    (response)=>{
      console.log(response)
      alert("registration successfull")
      this.name=""
      this.address=""
      this.phoneno=""
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
