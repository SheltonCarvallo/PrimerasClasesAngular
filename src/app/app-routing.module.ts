import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionComponent } from './modulos/autenticacion/componente/autenticacion.component';
import { MantenimientoComponent } from './modulos/persona/mantenimiento/mantenimiento.component';
import { NotfoundComponent } from './modulos/general/notfound/notfound.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', 
    loadChildren: () => import('./modulos/autenticacion/autenticacion.module')
    .then( m => m.AutenticacionModule)
  },
  //Ruta por modulo
  {path: 'productos',
    loadChildren: () => import('./modulos/productos/productos.module').then(m => m.ProductosModule)
  },   
  {path: 'personas', component: MantenimientoComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
