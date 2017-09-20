import {Component} from "@angular/core"
import {Employee} from "../EmployeeModule/Models/Employee"
import { EmployeeLogic } from "../EmployeeModule/Logic/EmployeeLogic";

@Component({
    selector : 'employee' ,
    //To check the html file in the same folder as the module js file
    templateUrl : './emp.component.html'
})
export class EmployeeComponent{
  IsAddNew:boolean;
  /**
   *
   */
  constructor() {
        this.IsAddNew = true;
  }

  HideAddNew():void{
      this.IsAddNew = true;
  }

  ShowAddNew():void{
    this.IsAddNew = false;
}

   }
  
