import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articulo } from '../Modelo/Articulo';
import { ArticuloService } from './articulos.service';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HttpService {


  private Url = 'localhost:8081/api/Articulo';
  Articulos : Array<Articulo>


  constructor(private http:HttpClient, private artservice: ArticuloService) { 

    this.Articulos= [];

  }

  getarts(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(this.Url);
  }





}
