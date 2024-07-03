import { NgFor, NgIf } from '@angular/common';
import { Component, input } from '@angular/core';
import { Compra } from '../../Modelo/Compra';
import { CompraComponent } from '../compra/compra.component';
import { UsuarioService } from '../../Servicios/usuario.service';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { HttpService } from '../../Servicios/http.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-miscompras',
  standalone: true,
  imports: [NgFor,NgIf,CompraComponent],
  providers: [UsuarioService],
  templateUrl: './miscompras.component.html',
  styleUrl: './miscompras.component.css'
})
export class MiscomprasComponent {

  Compras: Array<Compra> 

  constructor (private userservice: UsuarioService,private http: HttpService){

    this.Compras=userservice.getCompras();
    


  }





}
