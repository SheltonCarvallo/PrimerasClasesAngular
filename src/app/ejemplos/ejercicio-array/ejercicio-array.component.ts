import { Component } from '@angular/core';
import { lusuarios } from '../../datasource/dataejemplo';
import { Persona } from '../../datasource/persona.interface';

@Component({
  selector: 'app-ejercicio-array',
  templateUrl: './ejercicio-array.component.html',
})
export class EjercicioArrayComponent {

  usuarios: Persona[] = lusuarios;
  
  /*funcionExample() {
    this.usuarios.toString();
  }*/

  funcionPersona(persona: Persona) {
    console.log(persona);
  }

  funcionAceptar(){
    console.log('Esto esta Acpetado!!');
  }

  funcionBorrar(){
    console.log('Borrado!! XD');
  }

  actualizarPersona(persona: Persona){
    
  }

  guardarPersona(persona: Persona){
    if (persona.id == 0){
      persona.id = lusuarios.length + 1
    }
    lusuarios.push(persona);
  }
}
