import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <div class="app-container">
            <button class="home-button" [routerLink]="['/home/']">Home</button>
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent { 
    
}
