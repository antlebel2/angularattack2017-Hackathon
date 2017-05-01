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
var EmployeeApiPromiseService_1 = require("./shared/EmployeeApiPromiseService");
var employeeDto_1 = require("./shared/employeeDto");
var EmployeeComponent = (function () {
    function EmployeeComponent(_employeePromiseService) {
        this._employeePromiseService = _employeePromiseService;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._personDetail = new employeeDto_1.EmployeeDto();
        this._employeePromiseService.getService()
            .then(function (personDetail) { return _this._personDetail = personDetail; })
            .catch(function (error) { return console.log(error); });
        this._personEmail = this._employeePromiseService.getQueryParam();
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/employee.component.html',
        providers: [EmployeeApiPromiseService_1.EmployeeApiPromiseService]
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [EmployeeApiPromiseService_1.EmployeeApiPromiseService])
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map