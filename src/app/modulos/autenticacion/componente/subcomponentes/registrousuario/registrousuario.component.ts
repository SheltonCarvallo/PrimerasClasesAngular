import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registrousuario',
  templateUrl: './registrousuario.component.html',
})
export class RegistrousuarioComponent {
@Output()
volverPantallaLogin = new EventEmitter<string>();
eventoRandom(){
  this.volverPantallaLogin.emit("Login");
}
}
