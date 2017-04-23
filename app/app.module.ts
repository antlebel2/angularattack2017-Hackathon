import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { EmployeeComponent } from './employee.component';
import { EmployerComponent } from './employer.component';
import { EmployerSocialComponent } from './employerSocial.component';
import { EmployerWebComponent } from './employerWeb.component';

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
      { path: 'employer/social', component: EmployerSocialComponent },
      { path: 'employer/webStatistics', component: EmployerWebComponent },
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
    EmployerSocialComponent,
    EmployerWebComponent
  ],
  bootstrap: [ 
    AppComponent
  ]
})
export class AppModule { }
