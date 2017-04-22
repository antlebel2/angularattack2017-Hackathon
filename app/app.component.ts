import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <li><a [routerLink]="['/home/']">Home</a></li>
        <li><a [routerLink]="['/employee/']">Employee</a></li>
        <li><a [routerLink]="['/employer/']">Employer</a></li>
        <router-outlet></router-outlet>
    `
})
export class AppComponent { 

}
