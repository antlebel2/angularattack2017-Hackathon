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
var employerApiPromiseService_1 = require("./shared/employerApiPromiseService");
var employerDto_1 = require("./shared/employerDto");
var EmployerComponent = (function () {
    function EmployerComponent(_employerPromiseService) {
        this._employerPromiseService = _employerPromiseService;
    }
    EmployerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._companyDetail = new employerDto_1.EmployerDto();
        this._employerPromiseService.getService()
            .then(function (companyDetail) { return _this._companyDetail = companyDetail; })
            .catch(function (error) { return console.log(error); });
        this._companyDomain = this._employerPromiseService.getQueryParam();
    };
    return EmployerComponent;
}());
EmployerComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/employer.component.html',
        providers: [employerApiPromiseService_1.EmployerApiPromiseService]
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [employerApiPromiseService_1.EmployerApiPromiseService])
], EmployerComponent);
exports.EmployerComponent = EmployerComponent;
//# sourceMappingURL=employer.component.js.map