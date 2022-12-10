import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent {
  userid:any=""
  constructor(private api:ApiService){
    this.userid=localStorage.getItem("userinfo")
    let data:any={
    "id":this.userid
   }
   this.api.getuser(data).subscribe(
    (response:any)=>{
       console.log(response)
       this.data=response
    }
   )
  }
    data:any =[]
}
