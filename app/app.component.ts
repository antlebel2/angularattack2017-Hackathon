import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <div class="app-container">
            <div class="component-container">
                <router-outlet></router-outlet>
            </div>
            <div class="home-button-container">
                <button class="home-button" [routerLink]="['/home/']">Home</button>
            </div>
        </div>
    `
})
export class AppComponent { 
    
}
