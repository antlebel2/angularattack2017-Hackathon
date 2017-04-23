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
var employeeDto_1 = require("./employeeDto");
require("rxjs/add/operator/toPromise");
var EmployeeApiPromiseService = (function () {
    function EmployeeApiPromiseService(http, route) {
        this.http = http;
        this.route = route;
        this.APIKEY = 'c0402b24ca6234';
        this._employeeEmail = '&email=';
        this._employeeEndpoint = 'https://api.fullcontact.com/v2/person.json?apiKey=' + this.APIKEY;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    EmployeeApiPromiseService.prototype.getService = function () {
        this._employeeEmail += this.route.snapshot.queryParams['employeeEmail'];
        this._employeeEndpoint += this._employeeEmail;
        return this.http
            .get(this._employeeEndpoint, this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    EmployeeApiPromiseService.prototype.extractData = function (res) {
        var body = res.json();
        if (!body)
            return {};
        //hydrate - todo null if moved to function??!!??
        var _employeeDetail = new employeeDto_1.EmployeeDto();
        return _employeeDetail;
        //end hydrate;
    };
    EmployeeApiPromiseService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return EmployeeApiPromiseService;
}());
EmployeeApiPromiseService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute])
], EmployeeApiPromiseService);
exports.EmployeeApiPromiseService = EmployeeApiPromiseService;
//# sourceMappingURL=EmployeeApiPromiseService.js.map