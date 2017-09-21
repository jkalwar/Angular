import { Directive, ElementRef, Input, OnChanges, SimpleChanges, HostListener } from "@angular/core";

@Directive({
    selector:'[mouseovercolor]'
})
export class MouseOverDirective{
    @Input() mouseovercolor:string='red';
    constructor(private e:ElementRef){
    }

    @HostListener('mouseenter')
    ChangeColor():void{
        this.e.nativeElement.style.background=this.mouseovercolor;
    }
    
    @HostListener('mouseleave')
    ResetColor():void{
        this.e.nativeElement.style.background='white';
        
    }
}