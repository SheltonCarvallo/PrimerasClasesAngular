import { Component } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-datosprecio',
  templateUrl: './datosprecio.component.html'
})
export class DatosprecioComponent {

  options = ['SI', 'NO'];

  precioUnitario: any;
  aplicaIVA: any;
  aplicaDescuento: any;
  descuento: any;
  pvp: any;

  validarPrecios(){
    if(this.aplicaDescuento === 'SI'){
      if(this.descuento  > 0 || this.descuento === 0){
        alert('El valor del descuento no es válido');
        throwError;
      }
    }
  }

  guardar(){
    this.validarPrecios();
  }
}
