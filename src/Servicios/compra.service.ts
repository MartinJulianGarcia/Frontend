import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Articulo } from '../Modelo/Articulo';
import { Compra } from '../Modelo/Compra';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Modelo/Usuario';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { ObservableInput,throwError } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  //articulosdelacompra: Array<Articulo>
  //Comprasdelusuario: Array<Compra>

  compras:Array<Compra>=[]
  apiUrl: string = "http://localhost:8081/api/Compra";

  constructor(usuarioservice: UsuarioService, private http: HttpClient) { 

   // this.Comprasdelusuario=usuarioservice.getCompras()
   // this.articulosdelacompra=this.Comprasdelusuario


  }


AgregarCompra(c: Compra) : Observable<Compra> {
   // this.compras.push(c);
    //alert("se agrego una nueva compra al usuario"+ c.getImporte());
    //alert(this.compras);
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    
    if (!username || !password) {
      throw new Error('No authentication data found');
    }
    const headers = { 'Authorization': 'Basic ' + btoa(username + ":" + password)}

    return this.http.post<Compra>(this.apiUrl , c, {headers}).pipe(catchError(this.handleError));

  }
  
  getCompras(): Array<Compra> {
   // alert(this.compras +"ver porque aca no aparecen");
    return this.compras;
  }

  private handleError(error: HttpErrorResponse) {

    let errorMessage: string;
    alert(error.status);

    if (error.error instanceof ErrorEvent) {
      
      // Error del lado del cliente o de la red
      errorMessage = `Error: ${error.error.message}`;
      alert("entro en error del primer print");
    } else {
      // Error del lado del servidor
      
      errorMessage = `Error: ${error.status}\nMessage: ${error.message}`;
      alert("entro en error del segundo print");
    }
    alert(errorMessage);


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

  agregaralcarrito(c:Compra){
    this.compras.push(c);
  }

}


