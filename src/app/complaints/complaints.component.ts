import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent {
complaints=""
constructor(private api:ApiService){}
complaint=()=>{
     let data = {"userid":localStorage.getItem ("userinfo"),
     "complaints":this.complaints
      }
      this.api.addcomplaint(data).subscribe(
        (generated:any)=>{
          console.log(generated)
        }
      )
}
}
