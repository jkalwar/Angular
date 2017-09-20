//We are importing the angular core type script module.
import {NgModule} from "@angular/core"
import {EmployeeComponent} from "../EmployeeModule/emp.component";
import {EmployeeAddComponent} from "../EmployeeModule/emp.add.component";
import {EmployeeListComponent} from "../EmployeeModule/emp.list.component";
import { CommonModule } from "@angular/common";
import { EmployeeLogic } from "./Logic/EmployeeLogic";


@NgModule({
    imports : [CommonModule],
    declarations : [EmployeeAddComponent , EmployeeComponent , EmployeeListComponent],
    exports : [EmployeeComponent],
    providers:[{provide:EmployeeLogic , useClass:EmployeeLogic}]
})
export class EmployeeModule {
}