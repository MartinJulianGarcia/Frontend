import { Injectable } from '@angular/core';
import { Articulo } from '../Modelo/Articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  Articulos : Array<Articulo>

  constructor() {
    const art1 = new Articulo("Remera1", "Remera", 500, 1, 20, "Verano")
    const art2 = new Articulo("Remera2", "Remera",1000, 2 , 40, "Invierno")
    const art3 = new Articulo("Remera3", "Remera",1200, 3 , 0, "Verano")

    this.Articulos = [art1, art2, art3]
   }

  getArticulos(): Array<Articulo> {
    return this.Articulos;
  }

 // getLibroByISBN(isbn: string){
  //  return this.libros.find(libro => libro.getIsbn() === isbn)
 // }

}
