"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home.component");
var employee_component_1 = require("./employee.component");
var employer_component_1 = require("./employer.component");
var employerSocial_component_1 = require("./employerSocial.component");
var employerWeb_component_1 = require("./employerWeb.component");
var employerBio_component_1 = require("./employerBio.component");
var employerSelected_component_1 = require("./employerSelected.component");
var employeeSelected_component_1 = require("./employeeSelected.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'employee', component: employee_component_1.EmployeeComponent },
                { path: 'employer', component: employer_component_1.EmployerComponent },
                { path: 'employerSelected', component: employerSelected_component_1.EmployerSelectedComponent },
                { path: 'employeeSelected', component: employeeSelected_component_1.EmployeeSelectedComponent },
                { path: 'employer/socialMedia', component: employerSocial_component_1.EmployerSocialComponent },
                { path: 'employer/webStats', component: employerWeb_component_1.EmployerWebComponent },
                { path: 'employer/bio', component: employerBio_component_1.EmployerBioComponent },
                { path: '**', redirectTo: 'home', pathMatch: 'full' }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            employee_component_1.EmployeeComponent,
            employer_component_1.EmployerComponent,
            employerSelected_component_1.EmployerSelectedComponent,
            employeeSelected_component_1.EmployeeSelectedComponent,
            employerSocial_component_1.EmployerSocialComponent,
            employerWeb_component_1.EmployerWebComponent,
            employerBio_component_1.EmployerBioComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map