import {Component} from "@angular/core"
import {Employee} from "./Models/Employee"

@Component({
    selector : 'my-first-tag' ,
    //To check the html file in the same folder as the module js file
    templateUrl : './app.component.html'
})
export class AppComponent{
  Employees:Array<Employee>;
  EmpName:string;
  Salary:number;
  /**
   *
   */
  constructor() {
       this.EmpName = 'ABC';
       this.Salary = 1000;
       this.Employees =  new Array<Employee>();
       this.Employees.push(new Employee("JK",1000));      
       this.Employees.push(new Employee("Indu",1000));      
       this.Employees.push(new Employee("Nishita",1000));      
  }

  Increment():void{
      this.Salary = this.Salary*10;
  }
 }
  
