import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ArticuloService } from '../../../Servicios/articulos.service';
import { Articulo } from '../../../Modelo/Articulo';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-formulariodecompra',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './formulariodecompra.component.html',
  styleUrl: './formulariodecompra.component.css'
})
export class FormulariodecompraComponent {

  Articuloscarrito: Array<Articulo>
  bandera=false;
  bandera2=false;


  //private httpservice: HttpService

  constructor( private ArtService:ArticuloService) { 
    
 
     this.Articuloscarrito = [];
 
   }

   formulariodecompra = new FormGroup({'tarjeta':new FormControl("",Validators.required),  
    'direccion':new FormControl("",Validators.required), 'email':new FormControl("",[Validators.required,Validators.email]) } )

    procesar () {

      console.log(this.formulariodecompra.value)
      //this.user = new Usuario(this.formulariodeusuario.value.nombre!,this.formulariodeusuario.value.contra!,this.formulariodeusuario.value.email!);
      //this.userservice.AgregarUsuario(this.user);
      //alert(this.user)
      this.bandera2=true;
    }

   
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
    this.ArtService.SacarCarrito();
    this.bandera=true;

  }



}
