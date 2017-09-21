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
    OnAddNew:EventEmitter<void> = new EventEmitter<void>();
    /**
     *
     */
    constructor(private eLogic:EmployeeLogic) {
         eLogic.GetEmployees().subscribe((r)=>
         {
             let tempEmp:Array<any>=r.json();
             this.Employees = tempEmp.map((e)=>{
                 return new Employee(e.FirstName+" "+e.LastName, e.Salary);
             });
         });
    }
     
    ShowAddNew():void{
        this.OnAddNew.emit();
    }
 }
  
