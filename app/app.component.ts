import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <div class="app-container">
            <div class="component-container">
                <router-outlet></router-outlet>
            </div>
            <div class="home-button-container">
                <button class="home-button" [routerLink]="['/home/']">
                <i class="fa fa-home"></i> Home</button>
                <button class="home-button" [routerLink]="['/employee/']">Employee Page</button>
            </div>
        </div>
    `
})
export class AppComponent {

}
