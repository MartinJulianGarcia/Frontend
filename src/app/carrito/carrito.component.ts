import { Component, ViewChild, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Articulo } from '../../Modelo/Articulo';
import { ArticuloService } from '../../Servicios/articulos.service';
import { ArticuloComponent } from '../main/articulo/articulo.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HttpService } from '../../Servicios/http.service';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [ArticuloComponent,NgFor,NgIf,CommonModule,FooterComponent,FormsModule,ReactiveFormsModule,RouterOutlet, RouterModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  

  //Input () Articulo?: Articulo

  Articuloscarrito: Array<Articulo>
  bandera=false;



  //private httpservice: HttpService

  constructor( private ArtService:ArticuloService) { 
    
 
     this.Articuloscarrito = [];
 
   }

   //formulariodecompra = new FormGroup({'tarjeta':new FormControl("",Validators.required),  
   // 'direccion':new FormControl("",Validators.required), 'email':new FormControl("",[Validators.required,Validators.email]) } )

   // procesar () {

    //  console.log(this.formulariodecompra.value)
      //this.user = new Usuario(this.formulariodeusuario.value.nombre!,this.formulariodeusuario.value.contra!,this.formulariodeusuario.value.email!);
      //this.userservice.AgregarUsuario(this.user);
      //alert(this.user)
     // this.bandera=true;
    //}

   
   actualizar() : void {
        
    this.Articuloscarrito=this.ArtService.getcarrito();

    alert(this.ArtService.getcarrito());

    
   
  }
  
  vaciar() : void {
        
    this.ArtService.SacarCarrito();

    alert("El carrito se vacio");
  }

  ngOnInit(): void {
    this.Articuloscarrito = this.ArtService.getcarrito();

    
  }
   
  comprar() : void {
        
    alert("Se genero la compra");
    //this.ArtService.SacarCarrito();
    this.bandera=true;

  }


}
