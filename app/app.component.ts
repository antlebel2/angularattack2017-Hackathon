import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <div>
            <div class="app-container">
                <div class="component-container">
                    <router-outlet></router-outlet>
                </div>
                <div class="home-button-container">
                    <button class="home-button" [routerLink]="['/home/']">
                    <i class="fa fa-home"></i> Home</button>
                </div>
            </div>
        </div>
    </div>
    `,
})
export class AppComponent {

}
