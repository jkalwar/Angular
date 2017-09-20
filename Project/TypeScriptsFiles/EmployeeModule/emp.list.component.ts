import { Component, Output, EventEmitter } from "@angular/core"
import {Employee} from "../EmployeeModule/Models/Employee"
import { EmployeeLogic } from "../EmployeeModule/Logic/EmployeeLogic";

@Component({
    selector : 'employee-list' ,
    //To check the html file in the same folder as the module js file
    templateUrl : './emp.list.component.html'
    //providers:[{provide:EmployeeLogic , useClass:EmployeeLogic}]
})
export class EmployeeListComponent{
    Employees:Array<Employee>;
    @Output()
    OnAddNew:EventEmitter<void> = new EventEmitter();


    /**
     *
     */
    constructor(private eLogic:EmployeeLogic) {
         this.Employees = eLogic.GetEmployees();
         this.ShowAddNew();
    }
     
    ShowAddNew():void{
        this.OnAddNew.emit();
    }

 }
  
