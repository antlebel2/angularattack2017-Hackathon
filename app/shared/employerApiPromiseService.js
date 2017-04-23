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
var http_1 = require("@angular/http");
var employerDto_1 = require("./employerDto");
require("rxjs/add/operator/toPromise");
var EmployerApiPromiseService = (function () {
    function EmployerApiPromiseService(http, route) {
        this.http = http;
        this.route = route;
        this.APIKEY = 'c0402b24ca6234';
        this._companyDomain = '&domain=';
        this._companyEndpoint = 'https://api.fullcontact.com/v2/company/lookup.json?apiKey=' + this.APIKEY;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    EmployerApiPromiseService.prototype.getService = function () {
        this._companyDomain += this.route.snapshot.queryParams['companyDomain'];
        this._companyEndpoint += this._companyDomain;
        return this.http
            .get(this._companyEndpoint, this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    EmployerApiPromiseService.prototype.getQueryParam = function () {
        return this.route.snapshot.queryParams['companyDomain'];
    };
    EmployerApiPromiseService.prototype.extractData = function (res) {
        var body = res.json();
        if (!body)
            return {};
        //hydrate - todo null if moved to function??!!??
        var _companyDetail = new employerDto_1.EmployerDto();
        _companyDetail.name = body.organization.name;
        if (body.organization.contactInfo.addresses) {
            _companyDetail.city = body.organization.contactInfo.addresses[0].locality;
            _companyDetail.stateCode = body.organization.contactInfo.addresses[0].region.code;
        }
        if (body.organization.contactInfo.phoneNumbers)
            _companyDetail.phoneNumber = body.organization.contactInfo.phoneNumbers[0]['number'];
        return _companyDetail;
        //end hydrate;
    };
    EmployerApiPromiseService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return EmployerApiPromiseService;
}());
EmployerApiPromiseService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute])
], EmployerApiPromiseService);
exports.EmployerApiPromiseService = EmployerApiPromiseService;
//# sourceMappingURL=employerApiPromiseService.js.map