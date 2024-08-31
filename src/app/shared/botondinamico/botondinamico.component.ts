import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Persona } from '../../datasource/persona.interface';

@Component({
  selector: 'app-botondinamico',
  templateUrl: './botondinamico.component.html',

})
export class BotondinamicoComponent {
  @Input()
  labelBotton:string = "";

  @Input()
  registroPersona?: Persona; //With this each user is "stored" automatically in their respective botton

  @Output()
  eventoRegistro = new EventEmitter<Persona>()

  eventoClickBoton(){
    this.eventoRegistro.emit(this.registroPersona);
  }
}
