"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var EmployerBioComponent = (function () {
    function EmployerBioComponent(_http) {
        this._http = _http;
        this._companyEndpoint = '';
    }
    EmployerBioComponent.prototype.getProducts = function () {
        return this._http.get(this._companyEndpoint);
    };
    return EmployerBioComponent;
}());
EmployerBioComponent = __decorate([
    core_1.Component({
        template: "\n    <div class=\"component-title\">\n        You have chosen to learn more about the company you work for.\n    </div>\n    <div class=\"component-header\">\n        (Organization Name) - (Locality, region:code) (1st phone #)\n    </div>\n    <div class=\"component-header-container\">\n        <img class=\"component-header-image\" />\n    </div>\n    <div class=\"component-content\">\n        <div class=\"component-content-left\">\n            <div class=\"component-content-data-header\">Online since: </div>\n            <div class=\"component-content-data-header\">Keywords: </div>\n            <div class=\"component-content-data-header\">Traffic Ranking: </div>\n        </div>\n        <div class=\"component-content-right\">\n            <div class=\"component-content-data\">Online since: </div>\n            <div class=\"component-content-data\">Keywords: </div>\n            <div class=\"component-content-data\">Traffic Ranking: </div>\n        </div>\n    </div>\n    <div class=\"component-button-container\">\n        <button>test</button>\n        <button>test</button>\n        <button>test</button>       \n    </div>\n    "
    }),
    __metadata("design:paramtypes", [http_1.Http])
], EmployerBioComponent);
exports.EmployerBioComponent = EmployerBioComponent;
//# sourceMappingURL=employerBio.component.js.map