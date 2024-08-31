import { Component, EventEmitter, Output, OutputEmitterRef } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-miprimercomponente',
  templateUrl: './miprimercomponente.component.html',
})
export class MiprimercomponenteComponent {

  @Output()
  banderaAutenticacion = new EventEmitter<string>(); //banderaAutenticacion is an instance of the EventEmitter Class

  @Output()
  loginEventChild = new EventEmitter();

  labelLogin: string = "Hola Login from the ts";
  emailUsuario: string = '';
  passWordUsuario: string = '';

  mostrarNombre(): void {
    // this.nombreUsuario = "Ejemplo";
    console.log({ 'usuario': this.emailUsuario, 'pass': this.passWordUsuario });
  }

  eventoCambioPantalla(){
    this.banderaAutenticacion.emit("registro"); //emit is a method of the EventEmitter class
    // this.banderaAutenticacion.emit(...) is called in the child component.
  }

  login(){
    this.loginEventChild.emit();
  }

}
