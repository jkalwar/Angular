//We are importing the angular core type script module.
import {NgModule} from "@angular/core"
import {EmployeeComponent} from "../EmployeeModule/emp.component";
import {EmployeeAddComponent} from "../EmployeeModule/emp.add.component";
import {EmployeeListComponent} from "../EmployeeModule/emp.list.component";
import { CommonModule } from "@angular/common";
import { EmployeeLogic } from "./Logic/EmployeeLogic";
import { ConcatPipe } from "../Pipes/concat.pipe";
import {FormsModule} from "@angular/forms";
import {Http , HttpModule} from "@angular/http"


@NgModule({
    imports : [CommonModule , FormsModule , HttpModule],
    declarations : [ConcatPipe,EmployeeAddComponent , EmployeeComponent , EmployeeListComponent],
    exports : [EmployeeComponent],
    providers:[{provide:EmployeeLogic , useClass:EmployeeLogic}]
})
export class EmployeeModule {
}