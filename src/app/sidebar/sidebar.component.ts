import { Component, ChangeDetectorRef , ApplicationRef, output } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Articulo } from '../../Modelo/Articulo';
import { ArticuloService } from '../../Servicios/articulos.service';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ NgFor,NgIf,MainComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  filtro:string="todos";

  constructor( private ArtService:ArticuloService, private cdr: ChangeDetectorRef, private appRef: ApplicationRef) { 
    

}

@Output() filtrochange= new EventEmitter()

filtrar(fil :string) {
  
  this.ArtService.setfiltro(fil);


  this.filtrochange.emit();

 // this.cdr.detectChanges();
 // this.appRef.tick();
 // this.ArtService.cambiarFiltro(fil);
}



}
