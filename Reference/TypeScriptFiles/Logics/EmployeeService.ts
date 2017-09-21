import { Http,Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Employee } from "../Models/employee";
@Injectable()
export class EmployeeService    
{  constructor(
        private http:Http){
    
    }
    GetEmployees():Observable<Response>{
        return this.http.
get("http://trainitservice.azurewebsites.net/api/employee");
    }
    SaveEmployee(e:Employee){
       
    }
}

