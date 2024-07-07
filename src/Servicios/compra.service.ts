import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Articulo } from '../Modelo/Articulo';
import { Compra } from '../Modelo/Compra';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Modelo/Usuario';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  //articulosdelacompra: Array<Articulo>
  //Comprasdelusuario: Array<Compra>

  compras:Array<Compra>=[]

  constructor(usuarioservice: UsuarioService, private http: HttpClient) { 

   // this.Comprasdelusuario=usuarioservice.getCompras()
   // this.articulosdelacompra=this.Comprasdelusuario


  }


AgregarCompra(c: Compra) :void {
    this.compras.push(c);
    //alert("se agrego una nueva compra al usuario"+ c.getImporte());
    //alert(this.compras);

  }
  
  getCompras(): Array<Compra> {
   // alert(this.compras +"ver porque aca no aparecen");
    return this.compras;
  }

}


