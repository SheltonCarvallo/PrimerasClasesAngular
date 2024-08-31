import { Component, ViewChild } from '@angular/core';
import { DatosestudiantesComponent } from './subcomponentes/datosestudiantes/datosestudiantes.component';

@Component({
  selector: 'app-mantenimientoestudiante',
  templateUrl: './mantenimientoestudiante.component.html',
})
export class MantenimientoestudianteComponent {

  @ViewChild(DatosestudiantesComponent, {static: false})
  datosEstudianteComponent!: DatosestudiantesComponent;

  
}
