import { Employee } from "../Models/Employee";
import { Http,Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
//This Injectable decorator is required if there is no other decorator 
//and a constructor object needs to be created.
//The Employee Logic service is a global object available to all importing modules
//of this module
export class EmployeeLogic{
private Employees:Array<Employee>;
/**
 *
 */
constructor( private http:Http) {
    // this.Employees =  new Array<Employee>();
    // this.Employees.push(new Employee("JK",1000));      
    // this.Employees.push(new Employee("Indu",1000));      
    // this.Employees.push(new Employee("Nishita",1000));
}

GetEmployees():Observable<Response>{
    return this.http.
    get("http://trainitservice.azurewebsites/api/employee");
}

SaveEmployee(e:Employee):void{
    this.Employees.push(e);
}

}