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
var employee_1 = require("../Models/employee");
var EmployeeService_1 = require("../Logics/EmployeeService");
var EmployeeAddComponent = /** @class */ (function () {
    function EmployeeAddComponent(eLogic) {
        this.eLogic = eLogic;
        this.OnSave = new core_1.EventEmitter();
        this.OnCancel = new core_1.EventEmitter();
        this.emp = new employee_1.Employee("", 0);
    }
    EmployeeAddComponent.prototype.SaveEmployee = function () {
        this.eLogic.SaveEmployee(this.emp);
        this.OnSave.emit();
    };
    EmployeeAddComponent.prototype.HideAddNew = function () {
        this.OnCancel.emit();
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], EmployeeAddComponent.prototype, "OnSave", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], EmployeeAddComponent.prototype, "OnCancel", void 0);
    EmployeeAddComponent = __decorate([
        core_1.Component({
            selector: 'employee-add',
            templateUrl: './emp.add.component.html'
        }),
        __metadata("design:paramtypes", [EmployeeService_1.EmployeeService])
    ], EmployeeAddComponent);
    return EmployeeAddComponent;
}());
exports.EmployeeAddComponent = EmployeeAddComponent;
//# sourceMappingURL=emp.add.component.js.map