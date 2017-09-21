import {Component} from "@angular/core"
import {Employee} from "../Models/employee"
@Component({
    selector:'my-new-tag',
    templateUrl:'./app.component.html'
})
export class AppComponent{
    
}

@Component({
    selector:'customer',
    template:'<h1>Customer</h1>'
})
export class CustomerComponent{
    
}


@Component({
    selector:'product',
    template:'<h1>Product</h1>'
})
export class ProductComponent{
    
}