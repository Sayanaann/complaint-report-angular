import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-usercomplaints',
  templateUrl: './usercomplaints.component.html',
  styleUrls: ['./usercomplaints.component.css']
})
export class UsercomplaintsComponent {
 result:any=[]
 constructor(private api:ApiService){
  let data:any={"userid":localStorage.getItem("userinfo")}

   this.api.viewusercomplaint(data).subscribe(
    (response:any)=>{
      this.result=response;
    }
   )

 }
}
