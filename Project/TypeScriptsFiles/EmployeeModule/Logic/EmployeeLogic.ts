import { Employee } from "../Models/Employee";


//The Employee Logic service is a global object available to all importing modules
//of this module
export class EmployeeLogic{
private Employees:Array<Employee>;
/**
 *
 */
constructor() {
    this.Employees =  new Array<Employee>();
    this.Employees.push(new Employee("JK",1000));      
    this.Employees.push(new Employee("Indu",1000));      
    this.Employees.push(new Employee("Nishita",1000));
}

GetEmployees():Array<Employee>{
    return this.Employees;
}

SaveEmployee(e:Employee):void{
    this.Employees.push(e);
}

}