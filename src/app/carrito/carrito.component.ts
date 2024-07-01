import { Component, ViewChild, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Articulo } from '../../Modelo/Articulo';
import { ArticuloService } from '../../Servicios/articulos.service';
import { ArticuloComponent } from '../main/articulo/articulo.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [ArticuloComponent,NgFor,NgIf,CommonModule,FooterComponent],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  

  //Input () Articulo?: Articulo

  Articuloscarrito: Array<Articulo>

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
    this.Articuloscarrito = this.ArtService.getcarrito()
    
  }
   


}
