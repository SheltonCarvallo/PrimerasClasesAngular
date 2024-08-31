import { Component, ViewChild } from '@angular/core';
import { MiprimercomponenteComponent } from './subcomponentes/miprimercomponente/miprimercomponente.component';
import { RegistrousuarioComponent } from './subcomponentes/registrousuario/registrousuario.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  providers: [Router]
})
export class AutenticacionComponent {

  constructor(private router: Router){
  }

  //componente: MiprimercomponenteComponent = new MiprimercomponenteComponent()

  @ViewChild
    (MiprimercomponenteComponent, { static: false }) miLoqueSea!: MiprimercomponenteComponent;

  @ViewChild
    (RegistrousuarioComponent, { static: false }) registroUsuario!: RegistrousuarioComponent;




  private mailUsuario: string = 'vmtdev@gmail.com';

  private passUsuario: string = '123456.';

  pantallaPresentacion: string = "Login";

  toggleAutentication(dataCambio: string) {
    console.log(dataCambio);
    this.pantallaPresentacion = dataCambio;
  }

  login(datosLogin: any)
  {
    if(this.miLoqueSea.emailUsuario === this.mailUsuario)
      {
        if(this.miLoqueSea.passWordUsuario == this.passUsuario)
        {
            this.router.navigate(['/productos'])
        }
        else{
          window.alert("Contraseña incorrecta");
        }
      }
      else{
        window.alert("Usuario Incorrecto");
      }
    
  }
}
