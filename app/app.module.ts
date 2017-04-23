import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { EmployeeComponent } from './employee.component';
import { EmployerComponent } from './employer.component';
<<<<<<< HEAD
import { EmployerBioComponent } from './employerBio.component';
import { EmployerSocialComponent } from './employerSocial.component';
=======
import { EmployerWebComponent } from './employerWeb.component';
>>>>>>> 305c005142ec8dd736107e80d145e09f861ff9a6

import { EmployerSelectedComponent } from './employerSelected.component';
import { EmployeeSelectedComponent } from './employeeSelected.component';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule, 
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'employer', component: EmployerComponent},
      { path: 'employerSelected', component: EmployerSelectedComponent },
      { path: 'employeeSelected', component: EmployeeSelectedComponent },
<<<<<<< HEAD
      { path: 'employer/bio', component: EmployerBioComponent },
      { path: 'employer/social', component: EmployerSocialComponent },
=======
      { path: 'employer/webStatistics', component: EmployerWebComponent },
>>>>>>> 305c005142ec8dd736107e80d145e09f861ff9a6
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]) 
  ],
  declarations: [ 
    AppComponent, 
    HomeComponent,
    EmployeeComponent,
    EmployerComponent,
    EmployerSelectedComponent,
    EmployeeSelectedComponent,
<<<<<<< HEAD
    EmployerBioComponent,
    EmployerSocialComponent
=======
    EmployerWebComponent
>>>>>>> 305c005142ec8dd736107e80d145e09f861ff9a6
  ],
  bootstrap: [ 
    AppComponent
  ]
})
export class AppModule { }
