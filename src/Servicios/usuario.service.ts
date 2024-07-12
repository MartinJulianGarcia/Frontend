import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Articulo } from '../Modelo/Articulo';
import { Compra } from '../Modelo/Compra';
import { Usuario } from '../Modelo/Usuario';
import { ArticuloService } from './articulos.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ObservableInput,throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  Articulos : Array<Articulo>=[]
  compras :   Array<Compra>=[]
  usuario :   Usuario
  username: string;
  password:string;
  nombreusuarioensesion='';
  banderausuarioiniciado=false;
  apiUrl: string = "http://localhost:8081/api/Usuario";

 // private filtroSubject = new BehaviorSubject<string>('todos');
// filtro$ = this.filtroSubject.asObservable();
  //private static instanceCount = 0;
// si agrego private http:HttpClient dejan de andar todas las funciones del servicio

  constructor(  private http: HttpClient) {
    
   
    
    //const art1 = new Articulo(1,"Remera1", 20, 500, "Remera",    "Verano")
    //this.Articulos = [art1]
    const compra1=new Compra(500,"jose",this.Articulos,)
    this.compras=[compra1];
   
    this.usuario=new Usuario("Juan", "falso", "martinnjuliangarcia@gmail,com",this.compras);
    this.username="";
    this.password="";
    
    

   }
  



  AgregarCompra(c: Compra) :void {
    this.compras.push(c);
    alert("se agrego una nueva compra al usuario"+ c.getImporte());
    alert(this.compras);

  }
  
  getCompras(): Array<Compra> {
    alert(this.compras +"ver porque aca no aparecen");
    return this.compras;
  }

 // AgregarUsuario(u: Usuario) {
  //  this.usuarios.push(u);
   

 // }

  GetUsuario() :String {
   
    const username = sessionStorage.getItem('username');
    const password = sessionStorage.getItem('password');
    if(username!=null)
    {
      return username;
    }
    else{
      return "";
    }
   
  }


  RegistrarUsuario(u:Usuario) : Observable<Usuario>
  {
   
    this.usuario=new Usuario(u.getNombre(),u.getContra(),u.getEmail(),[]);

    sessionStorage.setItem('user', btoa(u.getNombre() + ":" + u.getContra()));
  
     
    return this.http.post<Usuario>(this.apiUrl , u).pipe(catchError(this.handleError));

    alert("terminoperonosabemosquepaso");
    
  }

  login(username: any, password: any): Observable<Usuario> {

    const headers = { 'Authorization': 'Basic ' + btoa(username + ":" + password)}

    return this.http.get<Usuario>(this.apiUrl + "/username/"+username, {headers}).pipe(catchError(this.handleErrorlogin))
    
    
  }



  private handleError(error: HttpErrorResponse) {

    let errorMessage: string;
    //alert(error.status);

    if (error.error instanceof ErrorEvent) {
      
      // Error del lado del cliente o de la red
      errorMessage = `Error: ${error.error.message}`;
      alert("entro en error del primer print");
    } else {
      // Error del lado del servidor
      
      errorMessage = `Error: ${error.status}\nMessage: ${error.message}`;
      alert("El usuario ya existe");
    }
   


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

  

  private handleErrorlogin(error: HttpErrorResponse) {

    let errorMessage: string;
    //alert(error.status);

    if (error.error instanceof ErrorEvent) {
      
      // Error del lado del cliente o de la red
      errorMessage = `Error: ${error.error.message}`;
      alert("entro en error del primer print");
    } else {
      // Error del lado del servidor
      
      errorMessage = `Error: ${error.status}\nMessage: ${error.message}`;
      alert("El usuario ya existe");
    }
   


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


  sesioniniciada()
  {
    if(localStorage.length>0)
    {
      this.banderausuarioiniciado=true;
      const nombre=localStorage.getItem('username')
      if(nombre!=null)
      {
         this.nombreusuarioensesion=nombre;
      }
      else{
        this.nombreusuarioensesion="";
      }
      
    }
  }




}
