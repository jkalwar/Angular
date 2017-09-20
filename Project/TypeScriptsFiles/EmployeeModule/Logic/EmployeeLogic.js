"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("../Models/Employee");
//The Employee Logic service is a global object available to all importing modules
//of this module
var EmployeeLogic = /** @class */ (function () {
    /**
     *
     */
    function EmployeeLogic() {
        this.Employees = new Array();
        this.Employees.push(new Employee_1.Employee("JK", 1000));
        this.Employees.push(new Employee_1.Employee("Indu", 1000));
        this.Employees.push(new Employee_1.Employee("Nishita", 1000));
    }
    EmployeeLogic.prototype.GetEmployees = function () {
        return this.Employees;
    };
    EmployeeLogic.prototype.SaveEmployee = function (e) {
        this.Employees.push(e);
    };
    return EmployeeLogic;
}());
exports.EmployeeLogic = EmployeeLogic;
//# sourceMappingURL=EmployeeLogic.js.map