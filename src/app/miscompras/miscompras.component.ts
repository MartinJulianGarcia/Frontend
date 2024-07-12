import { NgFor, NgIf } from '@angular/common';
import { Component, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Compra } from '../../Modelo/Compra';
import { CompraComponent } from './compra/compra.component';
import { UsuarioService } from '../../Servicios/usuario.service';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { HttpService } from '../../Servicios/http.service';
import { HttpClientModule } from '@angular/common/http';
import { CompraService } from '../../Servicios/compra.service';


@Component({
  selector: 'app-miscompras',
  standalone: true,
  imports: [NgFor,NgIf,CompraComponent],
  providers: [UsuarioService],
  templateUrl: './miscompras.component.html',
  styleUrl: './miscompras.component.css'
})
export class MiscomprasComponent implements OnInit, OnChanges{

  Compras: Array<Compra> =[]

  banderausuarioiniciado=false

  nombredeusuario="";

  constructor (private userservice: UsuarioService,private http: HttpService,private compraservice:CompraService){


    


  }

  ngOnInit(): void {

    this.compraservice.getCompras().subscribe((c) => {console.log(c); this.Compras=c});
    console.log( this.Compras.length )


      //this.Compras=this.compraservice.getCompras()
      if(sessionStorage.length>0)
        {
          this.banderausuarioiniciado=true;
          const nombre=sessionStorage.getItem('username')
          if(nombre!=null)
          {
             this.nombredeusuario=nombre;
          }
          else{
            this.nombredeusuario="";
          }
          
        }
     
  }

  ngOnChanges(changes: SimpleChanges): void {
  //  this.Compras=this.compraservice.getCompras()
   // alert(this.userservice.getCompras());
  }







}
