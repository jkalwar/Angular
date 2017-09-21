"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//We are importing the angular core type script module.
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var platform_browser_1 = require("@angular/platform-browser");
var emp_module_1 = require("../EmployeeModule/emp.module");
var router_1 = require("@angular/router");
var emp_component_1 = require("../EmployeeModule/emp.component");
var c = [
    { path: 'Customer', component: app_component_1.CustomerComponent },
    { path: 'Product', component: app_component_1.ProductComponent },
    { path: 'Employee', component: emp_component_1.EmployeeComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, emp_module_1.EmployeeModule,
                router_1.RouterModule.forRoot(c, { useHash: true })],
            declarations: [app_component_1.AppComponent, app_component_1.CustomerComponent, app_component_1.ProductComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map