import { Component } from '@angular/core';

@Component({
  selector: 'app-datospago',
  templateUrl: './datospago.component.html',
  styles: ``
})
export class DatospagoComponent {
  guardarDatosPago(){
    
  }
}

/* 
* 1.  Construir un módulo para el ingreso de productos a un invetario
* 1.1 El módulo manejará los siguientes procesos <-> componenetes
* - Datos del producto: Nombre, Tipo (Electrodoméstico, tecnología, varios),
* descripción y datos adicionales
* - Datos de precio(precio unitario, aplica IVA, aplica descuento, descuento y precio venta publico)
* Datos de proveedor (nombre provedor, descripcion provedor, precio provedor)
* 1.2 El módulo debe validar que el precio unitario y el precio del proveedor sean el mismo
* 1.3 El descuento no puede ser 0% ni mayor que el 8%
*/