import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ArticuloComponent } from './articulo/articulo.component';
import { Articulo } from '../../Modelo/Articulo';
import { ArticuloService } from '../../Servicios/articulos.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { HttpService } from '../../Servicios/http.service';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgFor,NgIf,ArticuloComponent],   // como son Standalone, debo importar los modulos y no usar un app.module.ts
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent implements OnInit {

  Articulos: Array<Articulo>=[]
  devolucionarts: Array<Articulo>=[];
  errorMessage:string | undefined;
  filtro="todos";
 

  

  constructor( private ArtService:ArticuloService) { 
    
    
    
   // const art1 = new Articulo("Remera1", "Remera", 500, 1, 20, "Verano")
    //const art2 = new Articulo("Remera2", "Remera",1000, 2 , 40, "Invierno")
   // const art3 = new Articulo("Remera3", "Remera",1200, 3 , 0, "Verano")

  //  this.Articulos = []
   // this.devolucionarts=[];

  }

  ngOnInit(): void {
   //this.Articulos = this.ArtService.getArticulosfiltrados()
    //this.Articulos= this.ArtService.getArticulosHTTP()
    this.ArtService.getArticulosHTTP().subscribe((art) => {console.log(art); this.devolucionarts=art; console.log( art.length)});
    console.log("algo hace pero no devuelve datos: "+ this.devolucionarts.length )

    this.filtro=this.ArtService.getfiltro();

    //this.Articulos=this.devolucionarts.filter(Articulo => Articulo.getTipo() == "remera");
   


  }

  actualizar(): void {

   
   //this.Articulos = this.ArtService.getArticulosfiltrados();
   alert('el evento si funciona pero no se actualiza la vista')

  }

}
