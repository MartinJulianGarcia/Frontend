import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Articulo } from '../Modelo/Articulo';
import { Compra } from '../Modelo/Compra';
import { Usuario } from '../Modelo/Usuario';
import { ArticuloService } from './articulos.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  Articulos : Array<Articulo>
  compras :   Array<Compra>
  usuarios :   Array<Usuario>
  username: string;
  password:string;

 // private filtroSubject = new BehaviorSubject<string>('todos');
// filtro$ = this.filtroSubject.asObservable();
  //private static instanceCount = 0;
// si agrego private http:HttpClient dejan de andar todas las funciones del servicio

  constructor(  ) {
    
   
    
    const art1 = new Articulo(1,"Remera1", 20, 500, "Remera",    "Verano")
    this.Articulos = [art1]
    const compra1=new Compra("tarjeta",1,500,this.Articulos,1,Date.now())
    this.compras=[compra1];
    const us1= new Usuario("Juan", "falso", "martinnjuliangarcia@gmail,com",this.compras,1)
    this.usuarios=[];
    this.username="";
    this.password="";
    
    

   }
  



  AgregarCompra(c: Compra) {
    this.compras.push(c);

  }

  AgregarUsuario(u: Usuario) {
    this.usuarios.push(u);
    localStorage.setItem('username', u.getNombre());
    localStorage.setItem('password', u.getContra());

  }

  GetUsuario() {
   
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

  }


  

  
  getCompras(): Array<Compra> {

    return this.compras;
  }


}
