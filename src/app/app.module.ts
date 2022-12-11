import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsernavComponent } from './usernav/usernav.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { UsercomplaintsComponent } from './usercomplaints/usercomplaints.component';
import { AdminviewcompComponent } from './adminviewcomp/adminviewcomp.component'

const myroute:Routes=[
  {
  path:"",
  component:AdminloginComponent
  },
  {
   path:"userregistration",
  component:UserregistrationComponent
   },
   {
   path:"userlogin",
   component:UserloginComponent
   },
  {
  path:"dashboard",
   component:DashboardComponent
  },
  {
   path:"viewprofile",
   component:ViewprofileComponent
   },
   {
    path:"complaints",
    component:ComplaintsComponent
    },
    {
      path:"usercomplaints",
      component:UsercomplaintsComponent
      },
      {
        path:"adminviewcomplaints",
        component:AdminviewcompComponent
        }
     
    
  

]

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    UserregistrationComponent,
    UserloginComponent,
    ViewprofileComponent,
    AdminnavComponent,
    DashboardComponent,
    UsernavComponent,
    ComplaintsComponent,
    UsercomplaintsComponent,
    AdminviewcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
