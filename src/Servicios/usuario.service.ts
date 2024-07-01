import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Articulo } from '../Modelo/Articulo';
import { Compra } from '../Modelo/Compra';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  Articulos : Array<Articulo>
  compras :   Array<Compra>

 // private filtroSubject = new BehaviorSubject<string>('todos');
// filtro$ = this.filtroSubject.asObservable();
  //private static instanceCount = 0;

  constructor() {
    const art1 = new Articulo("Remera1", "Remera", 500, 1, 20, "Verano")
    const art2 = new Articulo("Remera2", "Remera",1000, 2 , 40, "Invierno")
    const art3 = new Articulo("Remera3", "Remera",1200, 3 , 0, "Verano")

    this.Articulos = [art1, art2, art3]
    this.compras=[];

   }
  

  getArticulos(): Array<Articulo> {
    return this.Articulos;
  }



  AgregarCompra(c: Compra) {
    this.compras.push(c);

  }

  

  getCompras(): Array<Compra> {

    return this.compras;
  }


}
