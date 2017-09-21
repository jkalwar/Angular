import {  Pipe,PipeTransform} from "@angular/core";
@Pipe({
    name:'concat'
})
export class ConcatPipe implements PipeTransform{
    transform(v:string,...a:string[]):string{
        let k:string="";
        a.forEach(x=>{
            k=k+" "+x;
        });
        return v+" From Pipe"+k;
    }
}