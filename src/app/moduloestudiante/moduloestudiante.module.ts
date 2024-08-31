import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantenimientoestudianteComponent } from './estudiante/mantenimientoestudiante/mantenimientoestudiante.component';
import { DatosestudiantesComponent } from './estudiante/mantenimientoestudiante/subcomponentes/datosestudiantes/datosestudiantes.component';
import { DatoscalificacionesComponent } from './estudiante/mantenimientoestudiante/subcomponentes/datoscalificaciones/datoscalificaciones.component';
import { DatosrepresentanteComponent } from './estudiante/mantenimientoestudiante/subcomponentes/datosrepresentante/datosrepresentante.component';



@NgModule({
  declarations: [
    MantenimientoestudianteComponent,
    DatosestudiantesComponent,
    DatoscalificacionesComponent,
    DatosrepresentanteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MantenimientoestudianteComponent
  ]
})
export class ModuloestudianteModule { }
