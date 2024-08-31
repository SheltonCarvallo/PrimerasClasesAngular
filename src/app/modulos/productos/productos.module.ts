import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ParentmoduleproductComponent } from './parentmoduleproduct/parentmoduleproduct.component';
import { DatosproductosComponent } from './parentmoduleproduct/subcomponentes/datosproductos/datosproductos.component';
import { DatosprecioComponent } from './parentmoduleproduct/subcomponentes/datosprecio/datosprecio.component';
import { DatosproveedorComponent } from './parentmoduleproduct/subcomponentes/datosproveedor/datosproveedor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParentmoduleproductComponent,
    DatosproductosComponent,
    DatosprecioComponent,
    DatosproveedorComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule
  ],
  exports: [
    ParentmoduleproductComponent
  ]
})
export class ProductosModule { }
