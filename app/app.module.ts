import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { EmployeeComponent } from './employee.component';
import { EmployerBioComponent } from './employerBio.component';

import { EmployerSelectedComponent } from './employerSelected.component';
import { EmployeeSelectedComponent } from './employeeSelected.component';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule, 
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'employerSelected', component: EmployerSelectedComponent },
      { path: 'employeeSelected', component: EmployeeSelectedComponent },
      { path: 'employer/bio', component: EmployerBioComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]) 
  ],
  declarations: [ 
    AppComponent, 
    HomeComponent ,
    EmployeeComponent,
    EmployerSelectedComponent,
    EmployeeSelectedComponent,
    EmployerBioComponent
  ],
  bootstrap: [ 
    AppComponent
  ]
})
export class AppModule { }
