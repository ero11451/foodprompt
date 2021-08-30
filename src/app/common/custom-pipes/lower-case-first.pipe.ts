import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom_lowerCaseFirst'
})
export class LowerCaseFirst implements PipeTransform {

  transform(value:string): string {
    let first = value.substr(0,1).toLowerCase();
    return first + value.substr(1); 
  }

}