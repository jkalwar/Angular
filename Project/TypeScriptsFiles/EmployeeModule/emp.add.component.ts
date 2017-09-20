import {Component} from "@angular/core"
import {Employee} from "../EmployeeModule/Models/Employee"
import { EmployeeLogic } from "../EmployeeModule/Logic/EmployeeLogic";

@Component({
    selector : 'employee-add' ,
    //To check the html file in the same folder as the module js file
    templateUrl : './emp.add.component.html'
    //providers:[{provide:EmployeeLogic , useClass:EmployeeLogic}]
})
export class EmployeeAddComponent{
    Employees:Array<Employee>;
    constructor(private eLogic:EmployeeLogic) {
   }
    SaveEmployee():void{
        this.eLogic.SaveEmployee(new Employee("Jaffa",1000));
    }
 }
  
