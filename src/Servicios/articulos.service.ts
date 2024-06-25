import { Injectable } from '@angular/core';
import { Articulo } from '../Modelo/Articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  Articulos : Array<Articulo>
  carrito :   Array<Articulo>
  //private static instanceCount = 0;

  constructor() {
    const art1 = new Articulo("Remera1", "Remera", 500, 1, 20, "Verano")
    const art2 = new Articulo("Remera2", "Remera",1000, 2 , 40, "Invierno")
    const art3 = new Articulo("Remera3", "Remera",1200, 3 , 0, "Verano")

    this.Articulos = [art1, art2, art3]
    this.carrito=[];

    //alert(`CarritoService instance count: ${ArticuloService.instanceCount}`);
   }

  getArticulos(): Array<Articulo> {
    return this.Articulos;
  }

  AgregarCarrito(ar: Articulo) {
    this.carrito.push(ar);
   // localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  getcarrito(): Array<Articulo> {

   // const storedCart = localStorage.getItem('carrito');
    //if (storedCart) {
     // this.carrito = JSON.parse(storedCart);
    //}
    return this.carrito;
  }

}
