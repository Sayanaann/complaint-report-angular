import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  emailid=""
  password=""
  
  
  
  constructor(private api:ApiService,private route:Router){}

  userlogin=()=>
  {
let data : any ={  "emailid": this.emailid,
"password":this.password
}
     this.api.userlogin(data).subscribe(
      (response:any)=>{
        this.emailid=""
        this.password=""
        if(response.status="success"){
          let userid = response.userid
          console.log(userid)
          localStorage.setItem("userinfo",userid)
          this.route.navigate(['/viewprofile'])
        }else{
          alert(response.message)
        }
      }

     )

}
}
