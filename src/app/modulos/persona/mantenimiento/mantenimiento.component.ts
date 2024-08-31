import { Component, ViewChild } from '@angular/core';
import { DatospersonalesComponent } from './subcomponentes/datospersonales/datospersonales.component';
import { DatosautoComponent } from './subcomponentes/datosauto/datosauto.component';
import { DatospagoComponent } from './subcomponentes/datospago/datospago.component';
import { DatosgaranteComponent } from './subcomponentes/datosgarante/datosgarante.component';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
})
export class MantenimientoComponent {

    @ViewChild(DatospersonalesComponent, {static: false})
    datosPersonalesComponentChild!: DatospersonalesComponent;

    @ViewChild(DatosautoComponent, {static: false})
    datosAutoComponentChild!: DatosautoComponent;

    @ViewChild(DatospagoComponent, {static: false})
    datosPagoComponentChild!: DatospagoComponent;

    @ViewChild(DatosgaranteComponent, {static: false})
    datosGaranteComponent!: DatosgaranteComponent;


    mantenimientoUsuario(){
      this.datosPersonalesComponentChild.guardarDatosPersonales();
      this.datosAutoComponentChild.guardarDatosAuto();
      this.datosPagoComponentChild.guardarDatosPago();
      this.datosGaranteComponent.guardarDatosGarante();
    }
}
