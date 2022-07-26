import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replace' //é esse o nome do pipe. É o que será utilizado
})
export class ReplacePipe implements PipeTransform { //essa PipeTransform possui um método para fazer essa transformação 
    transform(value: string, char: string, valueToReplace: string) {
        return value.replace(char, valueToReplace)
        
    }
}