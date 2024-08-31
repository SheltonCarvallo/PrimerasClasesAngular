import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-datosgarante',
  templateUrl: './datosgarante.component.html',
  styles: ``
})
export class DatosgaranteComponent implements OnInit{

  //nombreGarante: string = '';
  //relacionGarante: string = '';

  constructor(private frmBuilder: FormBuilder){
    //this.frmGroupDatosGaranteRx = this.initForm();
  }
  frmGroupDatosGaranteRx!: FormGroup;

  ngOnInit(): void {
    this.frmGroupDatosGaranteRx = this.initForm();
  }
  

  guardarDatosGarante(){
    let datosGarante = this.frmGroupDatosGaranteRx.value;
    console.log(datosGarante);
  } 

  initForm(): FormGroup{
    return this.frmBuilder.group({
      //funcionalidad de un atributo perteneciente a un formulario reactivo
      //nombreAtributoFrmReactivo: [<Valor Inicial>, [..validadores]]
      nombreGarante: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
      relacionGarante: ['Ninguno', [Validators.required, Validators.minLength(7), Validators.maxLength(20)]]
    });
  }

}
