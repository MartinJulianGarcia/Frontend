import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ObservableInput,throwError } from 'rxjs';
import { Articulo } from '../Modelo/Articulo';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  Articulos : Array<Articulo>
  carrito :   Array<Articulo>
  filtro="todos";

  apiUrl: string = "http://localhost:8081/api/Articulo";
 // private filtroSubject = new BehaviorSubject<string>('todos');
// filtro$ = this.filtroSubject.asObservable();
  //private static instanceCount = 0;

  // si agrego private http:HttpClient dejan de andar todas las funciones del servicio

  constructor(private http: HttpClient) {
    const art1 = new Articulo(1,  "Remera1", 20 ,500,   "Verano" ,"Remera")
    const art2 = new Articulo(2,"Remera2",40 , 1000, "Invierno","Remera")
    const art3 = new Articulo(3,"Remera3",0, 5000,  "Verano", "Remera")

    this.Articulos = [art1, art2, art3]
    this.carrito=[];

    //alert(`CarritoService instance count: ${ArticuloService.instanceCount}`);
   }
  

  getArticulos(): Array<Articulo> {

    return this.Articulos;
    
    
  }

  getArticulosHTTP(): Observable<Articulo[]> {
  //alert( this.http.get<Articulo[]>(this.apiUrl).pipe(catchError(this.handleError)));

  return this.http.get<Articulo[]>(this.apiUrl).pipe(map(data => data.map(item => Articulo.fromJson(item))),catchError(this.handleError));
   

  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 401) {
      // Manejar error de no autorizado
      alert('No autorizado: 401');
    } else if (error.status === 403) {
      // Manejar error de acceso prohibido
      alert('no se accedio por error 403')
      console.error('Acceso prohibido:', error.message);
    } 
    else if (error.status === 0) {
      // Manejar error de acceso prohibido
      alert('no se accedio por error 0')
      console.error('Acceso prohibido:', error.message);
    } 
    else if (error.status > 403) {
      // Manejar error de acceso prohibido
      alert('no se accedio por error mayor a 403')
      console.error('Acceso prohibido:', error.message);
    } else {
      // Manejar otros errores
      alert('no se accedio por otro motivo')
      console.error('Ocurrió un error:', error.message);
    }
    return throwError('Ocurrió un error; por favor intenta nuevamente más tarde.');
    
  }


  getArticulosfiltrados(): Array<Articulo> {

    
    if (this.filtro=="todos")
    {
    return this.Articulos;
    }
  else
    {
    return this.Articulos.filter(Articulo => Articulo.getTipo() == this.filtro);
    }
    
    
  }

  AgregarCarrito(ar: Articulo) {
    this.carrito.push(ar);
   // localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }


  SacarCarrito() {

   
    while(this.carrito.length>0)
      {
        this.carrito.pop();
      }
    
   // localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }


  getcarrito(): Array<Articulo> {

   // const storedCart = localStorage.getItem('carrito');
    //if (storedCart) {
     // this.carrito = JSON.parse(storedCart);
    //}
    return this.carrito;
  }

  setfiltro( filtro: string)
  {
    alert("se cambio el filtro");
    this.filtro=filtro;
  }
  
  getfiltro( ): string
  {
    return this.filtro;
  }

}
