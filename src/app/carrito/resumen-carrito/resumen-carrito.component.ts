import { Component } from '@angular/core';
import { ArticuloService } from '../../../Servicios/articulos.service';
import { Articulo } from '../../../Modelo/Articulo';
import { NgFor,NgIf,CommonModule } from '@angular/common';
import { ArticuloComponent } from '../../main/articulo/articulo.component';

@Component({
  selector: 'app-resumen-carrito',
  standalone: true,
  imports: [ArticuloComponent,NgFor,NgIf,CommonModule],
  templateUrl: './resumen-carrito.component.html',
  styleUrl: './resumen-carrito.component.css'
})
export class ResumenCarritoComponent {

  Articuloscarrito: Array<Articulo>
  bandera=false;



  //private httpservice: HttpService

  constructor( private ArtService:ArticuloService) { 
    
 
     this.Articuloscarrito = [];
 
   }



   
   actualizar() : void {
        
    this.Articuloscarrito=this.ArtService.getcarrito();

    alert(this.ArtService.getcarrito());

    
   
  }
  
  vaciar() : void {
        
    this.ArtService.SacarCarrito();

    alert("El carrito se vacio");
  }

  ngOnInit(): void {
    this.Articuloscarrito = this.ArtService.getcarrito();

    
  }
   
  comprar() : void {
        
    alert("Se genero la compra");
    this.ArtService.SacarCarrito();
    this.bandera=true;

  }

}
