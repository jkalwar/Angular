import {Component} from "@angular/core"

@Component({
    selector : 'my-first-tag' ,
    //To check the html file in the same folder as the module js file
    templateUrl : './app.component.html'
})
export class AppComponent{
  EmpName:string;
  Salary:number;
  Increment():void{
    this.Salary = this.Salary*10;
 }
  /**
   *
   */
  constructor() {
      this.EmpName = 'ABC';
      this.Salary = 1000;
  }
}