import { Component, ViewChild } from '@angular/core';
import { DatosproductosComponent } from './subcomponentes/datosproductos/datosproductos.component';
import { DatosprecioComponent } from './subcomponentes/datosprecio/datosprecio.component';
import { DatosproveedorComponent } from './subcomponentes/datosproveedor/datosproveedor.component';

@Component({
  selector: 'app-parentmoduleproduct',
  templateUrl: './parentmoduleproduct.component.html',
})
export class ParentmoduleproductComponent {

  @ViewChild(DatosproductosComponent) datosProd!: DatosproductosComponent;
  @ViewChild(DatosprecioComponent) datosPrecio!: DatosprecioComponent;
  @ViewChild(DatosproveedorComponent) datosProveedor!: DatosproveedorComponent;

  guardar(){
    this.validarGuardar();
    this.datosProd.guardar();
    this.datosPrecio.guardar();
    this.datosProveedor.guardar();
  }

  //Es validarGurdad() es quien valida el precio entre los dos componentes
  validarGuardar(){
    if(this.datosPrecio.precioUnitario !== this.datosProveedor.precioProveedor){
      alert('El precio unitario y el precio del proveedor debern ser iguales');
    }

  }
}
