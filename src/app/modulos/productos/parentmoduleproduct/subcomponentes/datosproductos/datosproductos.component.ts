import { Component } from '@angular/core';

@Component({
  selector: 'app-datosproductos',
  templateUrl: './datosproductos.component.html',
  styles: ``
})
export class DatosproductosComponent {

  tiposProductos = ['electrodoméstico', 'tecnología', 'varios'];
  tipoProducto?: string;
  guardar(){
    
  }
}
