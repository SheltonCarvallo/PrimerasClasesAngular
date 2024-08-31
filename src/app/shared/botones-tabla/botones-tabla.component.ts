import { Component, EnvironmentInjector, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botones-tabla',
  templateUrl: './botones-tabla.component.html',
})
export class BotonesTablaComponent {

  
  @Input()
  estiloBtn1: string = 'primary';

  @Input()
  labelBtn1: string ='aceptar';

  @Input()
  estiloBtn2: string = 'danger';

  @Input()
  labelBtn2: string ='Borrar';

  @Input()
  dataRegistro: any;

  @Output()
  eventoBtn1 = new EventEmitter<any>(); //It means this event is going so send any thing

  @Output()
  eventoBtn2 = new EventEmitter<any>(); //It means this event is going so send any thing

  @Output()
  aceptar = new EventEmitter();

  @Output()
  eliminar = new EventEmitter();

  fnEventoBtn1()
  {
    this.eventoBtn1.emit(this.dataRegistro);
  }

  fnEventoBtn2()
  {
    this.eventoBtn2.emit(this.dataRegistro);
  }

  eventoAcepta(){
    this.aceptar.emit();
  }

  eventoEliminar(){
    this.eliminar.emit();
  }


}
