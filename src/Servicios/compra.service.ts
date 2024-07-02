import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Articulo } from '../Modelo/Articulo';
import { Compra } from '../Modelo/Compra';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  //articulosdelacompra: Array<Articulo>
  //Comprasdelusuario: Array<Compra>

  constructor(usuarioservice: UsuarioService, private http: HttpClient) { 

   // this.Comprasdelusuario=usuarioservice.getCompras()
   // this.articulosdelacompra=this.Comprasdelusuario


  }


}


