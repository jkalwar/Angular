import {Component} from "@angular/core"
import {Employee} from "../EmployeeModule/Models/Employee"
import { EmployeeLogic } from "../EmployeeModule/Logic/EmployeeLogic";

@Component({
    selector : 'my-first-tag' ,
    //To check the html file in the same folder as the module js file
    templateUrl : './app.component.html' ,
    
})
export class AppComponent{
  
  EmpName:string;
  Salary:number;
  constructor() {
       this.EmpName = 'ABC';
       this.Salary = 1000;
  }

  Increment():void{
      this.Salary = this.Salary*10;
  }

 }
  
