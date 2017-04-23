"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
<<<<<<< HEAD
        template: "\n    <div class=\"full\">\n        <div class=\"app-container\">\n            <div class=\"component-container\">\n                <router-outlet></router-outlet>\n            </div>\n            <div class=\"home-button-container\">\n                <button class=\"home-button\" [routerLink]=\"['/home/']\">\n                <i class=\"fa fa-home\"></i> Home</button>\n                <button class=\"home-button\" [routerLink]=\"['/employee/']\">Employee Page</button>\n            </div>\n        </div>\n    </div>\n    ",
=======
        template: "\n        <div>\n            <div class=\"app-container\">\n                <div class=\"component-container\">\n                    <router-outlet></router-outlet>\n                </div>\n                <div class=\"home-button-container\">\n                    <button class=\"home-button\" [routerLink]=\"['/home/']\">\n                    <i class=\"fa fa-home\"></i> Home</button>\n                </div>\n            </div>\n        </div>\n    ",
>>>>>>> 6663159d6b43581f2c691ab67ae641e3c80ffabb
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map