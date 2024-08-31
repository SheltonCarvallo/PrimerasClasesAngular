import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TabladatosComponent } from './ejemplos/tabladatos/tabladatos.component';
import { EjemploNgTemplateComponent } from './ejemplos/ejemplo-ng-template/ejemplo-ng-template.component';
import { HeaderComponent } from './shared/header/header.component';
import { ModuloPadreComponent } from './modulo-padre/modulo-padre.component';
import { HomeComponent } from './componenets/home/home.component';
import { BotonesTablaComponent } from './shared/botones-tabla/botones-tabla.component';
import { EjercicioArrayComponent } from './ejemplos/ejercicio-array/ejercicio-array.component';
import { BotondinamicoComponent } from './shared/botondinamico/botondinamico.component';
import { ModalpersonasComponent } from './ejercicios/tablapersonas/modalpersonas/modalpersonas.component';
import { TablaproductosComponent } from './ejercicios/tablaproductos/tablaproductos.component';
import { StockpipePipe } from './shared/pipes/stockpipe.pipe';
import { ProductoCategoriaPipe } from './shared/pipes/producto-categoria.pipe';
import { PersonaModule } from './modulos/persona/persona.module';
import { ProductosModule } from './modulos/productos/productos.module';
import { NotfoundComponent } from './modulos/general/notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    TabladatosComponent,
    EjemploNgTemplateComponent,
    HeaderComponent,
    ModuloPadreComponent,
    HomeComponent,
    BotonesTablaComponent,
    EjercicioArrayComponent,
    BotondinamicoComponent,
    ModalpersonasComponent,
    TablaproductosComponent,
    StockpipePipe,
    ProductoCategoriaPipe,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PersonaModule,
    ProductosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
