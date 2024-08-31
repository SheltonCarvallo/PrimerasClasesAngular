import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockpipe'
})
export class StockpipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let valorStock: string = 'None';
    let labelStock = args[0];
    
    switch(value)
    {
      case 0:
        {
          valorStock = ' Sin items dispnibles';
          break;
        }
      case 1:
      {
        valorStock = ' Item disponible';
        break;
      }  
      default:
      {
        valorStock = ' Items disponibles'
        break;
      }
      
    }

    return value +  valorStock;
  }

}
