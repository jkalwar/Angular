import {Pipe , PipeTransform} from "@angular/core"

@Pipe({
    name:"concat"
})
export class ConcatPipe implements PipeTransform{
    transform(value:string, ...args: string[]):string {
        let k:string="";
        args.forEach(x=>{
            k=k+" "+x;
        })
        return value+" From Pipe" + k;
    }

}