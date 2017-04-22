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
<<<<<<< HEAD
      { path: 'employer', component: EmployerComponent },
      { path: 'employerSelected', component: EmployerSelectedComponent },
      { path: 'employeeSelected', component: EmployeeSelectedComponent },
=======
      { path: 'employer/bio', component: EmployerBioComponent },
>>>>>>> 3d14428f9e78177a24c04818f1f9268cb000e9fb
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]) 
  ],
  declarations: [ 
    AppComponent, 
    HomeComponent ,
    EmployeeComponent,
<<<<<<< HEAD
    EmployerComponent,
    EmployerSelectedComponent,
    EmployeeSelectedComponent
=======
    EmployerBioComponent
>>>>>>> 3d14428f9e78177a24c04818f1f9268cb000e9fb
  ],
  bootstrap: [ 
    AppComponent
  ]
})
export class AppModule { }
