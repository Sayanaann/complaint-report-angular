import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adminviewcomp',
  templateUrl: './adminviewcomp.component.html',
  styleUrls: ['./adminviewcomp.component.css']
})
export class AdminviewcompComponent {
constructor(private api:ApiService){
  api.viewallcomplaint().subscribe(
    (response:any)=>
    {
      this.data=response
    }
  )
}
 data:any=[]
}
