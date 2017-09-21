import { Component, EventEmitter, Output } from "@angular/core"
import { Employee } from "../Models/employee"
import { EmployeeService } from "../Logics/EmployeeService"
import { Http  } from "@angular/http";
@Component({
    selector: 'employee-list',
    templateUrl: './emp.list.component.html'
})
export class EmployeeListComponent {
    Employees: Array<Employee>;

    @Output() OnAddNew: EventEmitter<void> = new EventEmitter<void>();

    myColor:string;

    constructor(private eLogic: EmployeeService) {
        this.myColor="green";
       eLogic.GetEmployees().subscribe((r)=>{
           let tempEmployees:Array<any> =r.json();
         this.Employees= tempEmployees.map((e)=>{
                return new Employee(e.FirsName+" "+e.LastName,e.Salary);
           });
       });
    }

    SetOrange():void{
        this.myColor="orange";
    }
    SetGreen():void{
        this.myColor="green";

    }


    c: number = 0;
    ShowAddNew(): void {
        this.c++;
        if (this.c == 2) {
            this.OnAddNew.emit();
            this.c = 0;
        }

    }
}