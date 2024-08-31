import { Component } from '@angular/core';
import { ProductoDetailInterface } from '../../datasource/ProductoDetailInterface';
import { listProducts } from '../../datasource/ProductoDetailObject';

@Component({
  selector: 'app-tablaproductos',
  templateUrl: './tablaproductos.component.html',
})
export class TablaproductosComponent {
  lproductos: ProductoDetailInterface[] = listProducts;
}
