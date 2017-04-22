"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployerComponent = (function () {
    function EmployerComponent() {
    }
    return EmployerComponent;
}());
EmployerComponent = __decorate([
    core_1.Component({
        template: "\n    <div class=\"component-title\">\n        You have chosen to learn more about the company you work for.\n    </div>\n    <div class=\"component-header\">\n        (Organization Name) - (Locality, region:code) (1st phone #)\n    </div>\n    <div class=\"component-header-container\">\n        <img class=\"component-header-image\" />\n    </div>\n    <div class=\"component-content\">\n        <div class=\"component-content-left\">\n            <div class=\"component-content-data-header\">Online since: </div>\n            <div class=\"component-content-data-header\">Keywords: </div>\n            <div class=\"component-content-data-header\">Traffic Ranking: </div>\n        </div>\n        <div class=\"component-content-right\">\n            <div class=\"component-content-data\">Online since: </div>\n            <div class=\"component-content-data\">Keywords: </div>\n            <div class=\"component-content-data\">Traffic Ranking: </div>\n        </div>\n    </div>\n    <div class=\"component-button-container\">\n        <button>test</button>\n        <button>test</button>\n        <button>test</button>       \n    </div>\n    "
    })
], EmployerComponent);
exports.EmployerComponent = EmployerComponent;
//# sourceMappingURL=employer.component.js.map