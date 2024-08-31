import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productoCategoria'
})
export class ProductoCategoriaPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let valorCategoria: string = "";

    switch (value) {
      case 'OC':
        {
          valorCategoria = 'Ocio';
          break;
        }
      case 'VA':
        {
          valorCategoria = 'Varios';
          break;
        }
      case 'HT':
        {
          valorCategoria = 'Salud';
          break;
        }
      case 'CO':
        {
          valorCategoria = 'General';
          break;
        }
    }
    return valorCategoria;
  }

}
