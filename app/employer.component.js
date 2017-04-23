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
var router_1 = require("@angular/router");
var webApiPromiseService_1 = require("./shared/webApiPromiseService");
var employerDto_1 = require("./shared/employerDto");
var EmployerComponent = (function () {
    function EmployerComponent(_moviePromiseService, route) {
        this._moviePromiseService = _moviePromiseService;
        this.route = route;
        this.APIKEY = 'c0402b24ca6234';
        this._companyDomain = '&domain=';
        this._companyEndpoint = 'https://api.fullcontact.com/v2/company/lookup.json?apiKey=' + this.APIKEY;
    }
    EmployerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._companyDomain += this.route.snapshot.queryParams['companyDomain'];
        this._companyEndpoint += this._companyDomain;
        this._moviePromiseService.getService(this._companyEndpoint)
            .then(function (result) { return _this.hydrate(result); })
            .catch(function (error) { return console.log(error); });
        this._companyDetail = new employerDto_1.EmployerDto();
    };
    EmployerComponent.prototype.hydrate = function (data) {
        this._companyDetail.name = data.organization.name;
        if (data.organization.contactInfo.addresses) {
            this._companyDetail.city = data.organization.contactInfo.addresses[0].locality;
            this._companyDetail.stateCode = data.organization.contactInfo.addresses[0].region.code;
        }
        if (data.organization.contactInfo.phoneNumbers)
            this._companyDetail.phoneNumber = data.organization.contactInfo.phoneNumbers[0]['number'];
    };
    return EmployerComponent;
}());
EmployerComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/employer.component.html',
        providers: [webApiPromiseService_1.WebApiPromiseService]
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [webApiPromiseService_1.WebApiPromiseService, router_1.ActivatedRoute])
], EmployerComponent);
exports.EmployerComponent = EmployerComponent;
//# sourceMappingURL=employer.component.js.map