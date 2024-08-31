import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentmoduleproductComponent } from './parentmoduleproduct/parentmoduleproduct.component';

const routes: Routes = [
  {path: '', component: ParentmoduleproductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
