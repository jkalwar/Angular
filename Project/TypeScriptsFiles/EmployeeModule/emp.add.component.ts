import { Component, Output ,EventEmitter } from "@angular/core"
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

   @Output()
   OnSave:EventEmitter<void> =  new EventEmitter<void>();

   @Output()
   OnCancel:EventEmitter<void> =  new EventEmitter<void>();
   emp:Employee = new Employee("",0);
    SaveEmployee():void{
        this.eLogic.SaveEmployee(this.emp);
        this.OnSave.emit();
    }
    HideAddNew():void{
        this.OnCancel.emit();
    }
 }
  
