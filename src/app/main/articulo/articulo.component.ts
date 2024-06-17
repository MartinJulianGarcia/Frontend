import { Component, OnInit, Input } from '@angular/core';
import { ArticuloService } from '../../../Servicios/articulos.service';
import { Articulo } from '../../../Modelo/Articulo';


@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent  {

  @Input () Articulo?: Articulo

  // @Input() Articulos?: Array<Articulo>

  onClickAgregar() {
    alert('Agregado al carrito')
  }

 

}
