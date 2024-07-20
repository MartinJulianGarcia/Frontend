import { Component, ChangeDetectorRef , ApplicationRef, output } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Articulo } from '../../Modelo/Articulo';
import { ArticuloService } from '../../Servicios/articulos.service';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ NgFor,NgIf,MainComponent, NgClass,RouterModule,RouterOutlet],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  filtro:string="todos";

  constructor( private ArtService:ArticuloService, private cdr: ChangeDetectorRef, private appRef: ApplicationRef,private router: Router,) { 
    

}
bandera1=false;

@Output() filtrochange= new EventEmitter()

filtrar(fil :string) {
  
  this.ArtService.setfiltro(fil);
 

 // this.filtrochange.emit();

  this.cdr.detectChanges();
  //this.refrescarPagina()
 // this.appRef.tick();
 // this.ArtService.cambiarFiltro(fil);
}

refrescarPagina() {
//  const rutaActual = this.router.url;
  //const rutaTemporal = '/ruta-temporal';

  // Navegar a una ruta temporal y luego volver a la ruta original
 // this.router.navigateByUrl("/footer").then(() => {
  //  setTimeout(() => this.router.navigateByUrl(rutaActual), 1);
  //});
}



}
