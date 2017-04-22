import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { EmployeeComponent } from './employee.component';
import { EmployerBioComponent } from './employerBio.component';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule, 
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'employer/bio', component: EmployerBioComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]) 
  ],
  declarations: [ 
    AppComponent, 
    HomeComponent ,
    EmployeeComponent,
    EmployerBioComponent
  ],
  bootstrap: [ 
    AppComponent
  ]
})
export class AppModule { }
