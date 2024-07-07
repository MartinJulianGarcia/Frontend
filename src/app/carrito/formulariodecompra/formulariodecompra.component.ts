import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ArticuloService } from '../../../Servicios/articulos.service';
import { Articulo } from '../../../Modelo/Articulo';
import { HttpClient } from '@angular/common/http';
import { CompraService } from '../../../Servicios/compra.service';
import { Compra } from '../../../Modelo/Compra';
import { CarritoComponent } from '../carrito.component';
import { UsuarioService } from '../../../Servicios/usuario.service';
import { Usuario } from '../../../Modelo/Usuario';
import { ChangeDetectorRef } from '@angular/core';

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
  compra:Compra;
  importe:number=0;


  //private httpservice: HttpService

  constructor( private ArtService:ArticuloService, private compraservice: CompraService, private usuarioservice:UsuarioService, private cdr: ChangeDetectorRef) { 
    
 
     this.Articuloscarrito = [];
     this.compra= new Compra("tajeta",2,this.importe,this.Articuloscarrito,1,Date.now());
    
 
   }

   formulariodecompra = new FormGroup({'tarjeta':new FormControl("",Validators.required),  
    'direccion':new FormControl("",Validators.required), 'email':new FormControl("",[Validators.required,Validators.email]) } )

    procesar () {

      console.log(this.formulariodecompra.value)
      //this.user = new Usuario(this.formulariodeusuario.value.nombre!,this.formulariodeusuario.value.contra!,this.formulariodeusuario.value.email!);
      //this.userservice.AgregarUsuario(this.user);
      //alert(this.user)

      this.bandera2=true;
      this.Articuloscarrito.forEach(art => {this.importe= this.importe + art.getprecio()
        
      });
      this.compra=new Compra("tarjeta",2,this.importe,this.Articuloscarrito,1,Date.now())
      this.comprar(this.compra);
     // this.usuarioservice.AgregarCompra(this.compra);
      this.ArtService.SacarCarrito();
      this.cdr.detectChanges();
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
   
  comprar(c: Compra) : void {
        
    
    alert('Agregado al carrito');
    if (c==undefined)
      {

      }
      else
      {
        this.compraservice.AgregarCompra(c);

      }
    this.bandera=true;
    alert (this.compra.getImporte());
  }



}
