import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
<<<<<<< HEAD
    <div class="full">
        <div class="app-container">
            <div class="component-container">
                <router-outlet></router-outlet>
            </div>
            <div class="home-button-container">
                <button class="home-button" [routerLink]="['/home/']">
                <i class="fa fa-home"></i> Home</button>
                <button class="home-button" [routerLink]="['/employee/']">Employee Page</button>
=======
        <div>
            <div class="app-container">
                <div class="component-container">
                    <router-outlet></router-outlet>
                </div>
                <div class="home-button-container">
                    <button class="home-button" [routerLink]="['/home/']">
                    <i class="fa fa-home"></i> Home</button>
                </div>
>>>>>>> 6663159d6b43581f2c691ab67ae641e3c80ffabb
            </div>
        </div>
    </div>
    `,
})
export class AppComponent {

}
