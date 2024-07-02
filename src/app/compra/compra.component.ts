import { Component } from '@angular/core';
import { Compra } from '../../Modelo/Compra';
import { Input } from '@angular/core';
import { Articulo } from '../../Modelo/Articulo';
import { UsuarioService } from '../../Servicios/usuario.service';


@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})
export class CompraComponent {

   @Input () Compra?: Compra


   //articulosdelacompra: Array<Articulo>;

   constructor(userservice: UsuarioService){
   // this.articulosdelacompra=userservice.getCompras();

   }

}
