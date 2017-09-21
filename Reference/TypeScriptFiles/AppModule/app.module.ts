import {NgModule} from "@angular/core"
import {AppComponent,CustomerComponent,ProductComponent} from "./app.component"
import {BrowserModule} from "@angular/platform-browser"
import { EmployeeModule } from "../EmployeeModule/emp.module";
import { Routes,RouterModule } from "@angular/router";
import { EmployeeComponent } from "../EmployeeModule/emp.component";

const c:Routes =[{path:'Customer',
component:CustomerComponent},
{path:'Product',component:ProductComponent},
{path:'Employee',component:EmployeeComponent},
{path:'',component:ProductComponent}];




@NgModule({
    imports:[BrowserModule,EmployeeModule,
    RouterModule.forRoot(c,{useHash:true})],
    declarations:[AppComponent,CustomerComponent,ProductComponent],
    bootstrap:[AppComponent]
})
export class AppModule{

}