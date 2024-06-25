import { Component, OnInit, Input } from '@angular/core';
import { ArticuloService } from '../../../Servicios/articulos.service';
import { Articulo } from '../../../Modelo/Articulo';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent  {

  @Input () Articulo?: Articulo

 

 

  constructor( private ArtService:ArticuloService) { 
    
    

   }

  // @Input() Articulos?: Array<Articulo>

  onClickAgregar() {
    alert('Agregado al carrito');
    if (this.Articulo==undefined)
      {

      }
      else
      {
        this.ArtService.AgregarCarrito( this.Articulo);

        alert(this.ArtService.getcarrito());
      }
    


    
  }

 

}
