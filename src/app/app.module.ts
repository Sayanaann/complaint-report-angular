import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserregistrationComponent } from './userregistration/userregistration.component'

const myroute:Routes=[
  {
  path:"",
  component:AdminloginComponent
  },
  {
    path:"userregistration",
    component:UserregistrationComponent
    }
  

]

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    UserregistrationComponent
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
