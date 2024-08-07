import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ObservableInput,throwError } from 'rxjs';
import { Articulo } from '../Modelo/Articulo';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import {  EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  Articulos : Array<Articulo>
  carrito :   Array<Articulo>
  filtro="todos";
  Articulosactualizados:Array<Articulo>
  private articulosSubject = new BehaviorSubject<any[]>([]);
  articulos$ = this.articulosSubject.asObservable();


  apiUrl: string = "http://localhost:8081/api/Articulo";
 // private filtroSubject = new BehaviorSubject<string>('todos');
// filtro$ = this.filtroSubject.asObservable();
  //private static instanceCount = 0;

  // si agrego private http:HttpClient dejan de andar todas las funciones del servicio

  constructor(private http: HttpClient) {
    const art1 = new Articulo(  "Remera1", 20 ,500,   "Verano" ,"Remera")
    const art2 = new Articulo("Remera2",40 , 1000, "Invierno","Remera")
    const art3 = new Articulo("Remera3",0, 5000,  "Verano", "Remera")

    this.Articulos = [art1, art2, art3]
    this.carrito=[];
    this.Articulosactualizados=[];
    //alert(`CarritoService instance count: ${ArticuloService.instanceCount}`);
   }
  

  getArticulos(): Array<Articulo> {

    return this.Articulos;
    
    
  }

  getArticulosHTTP(): Observable<Articulo[]> {
  //alert( this.http.get<Articulo[]>(this.apiUrl).pipe(catchError(this.handleError)));

  
  return this.http.get<Articulo[]>(this.apiUrl).pipe(map(data => data.map(item => Articulo.fromJson(item))),catchError(this.handleError));
   

  }

  PostArticulosHTTP(art:Articulo): Observable<Articulo> {
    //alert( this.http.get<Articulo[]>(this.apiUrl).pipe(catchError(this.handleError)));
  
    //return this.http.post<Articulo>(this.apiUrl, art).pipe(catchError(this.handleError));   ESTE SIN AUTH FUNCIONA OK
    const username = sessionStorage.getItem('username');
    const password = sessionStorage.getItem('password');
    
    if (!username || !password) {
      throw new Error('No authentication data found');
    }
    const headers = { 'Authorization': 'Basic ' + btoa(username + ":" + password)}
    return this.http.post<Articulo>(this.apiUrl, art, {headers}).pipe(catchError(this.handleError));
     
     
  
    }

    PutArticulosHTTP(art:Articulo): Observable<Articulo> {
      //alert( this.http.get<Articulo[]>(this.apiUrl).pipe(catchError(this.handleError)));
    
      //return this.http.post<Articulo>(this.apiUrl, art).pipe(catchError(this.handleError));   ESTE SIN AUTH FUNCIONA OK
      const username = sessionStorage.getItem('username');
      const password = sessionStorage.getItem('password');
      
      if (!username || !password) {
        throw new Error('No authentication data found');
      }
      const headers = { 'Authorization': 'Basic ' + btoa(username + ":" + password)}
      return this.http.put<Articulo>(this.apiUrl, art, {headers}).pipe(catchError(this.handleError));
       
       
    
      }

    deletetArticulosHTTP(art:Articulo): Observable<Articulo> {
      //alert( this.http.get<Articulo[]>(this.apiUrl).pipe(catchError(this.handleError)));
    
      const username = sessionStorage.getItem('username');
      const password = sessionStorage.getItem('password');
      
      if (!username || !password) {
        throw new Error('No authentication data found');
      }
      const headers = { 'Authorization': 'Basic ' + btoa(username + ":" + password)}
      return this.http.delete<Articulo>(this.apiUrl + "/"+art.getNombre(), {headers}).pipe(catchError(this.handleError));
       
    
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
      alert('No se puede conectar al servidor, error 0')
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
      this.Articulosactualizados= this.Articulos.filter(Articulo => Articulo.getTipo() == this.filtro || Articulo.getTemporada() == this.filtro )
    return this.Articulosactualizados;
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

  actualizar (art:Articulo[]):  Array<Articulo> {
    this.Articulosactualizados= art;
    return art;
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
   // this.articulosSubject.next(this.Articulosactualizados);
  }

  getfiltro( ): string
  {
    return this.filtro;
  }

}
