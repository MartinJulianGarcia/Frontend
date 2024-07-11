import { Component } from '@angular/core';
import { FormGroup,FormControl, MinLengthValidator } from '@angular/forms';
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
  username:string | null;
  articulosvacio:Array<Articulo>=[]
  responseData: any | undefined;


  //private httpservice: HttpService

  constructor( private ArtService:ArticuloService, private compraservice: CompraService, private usuarioservice:UsuarioService, private cdr: ChangeDetectorRef) { 
    
 
     this.Articuloscarrito = [];
     this.compra= new Compra(this.importe,"juan",this.Articuloscarrito);
     this.username=localStorage.getItem("username")
     
 
   }

   formulariodecompra = new FormGroup({'tarjeta':new FormControl("",[Validators.required,Validators.minLength(10), Validators.pattern('^[0-9]+$')]),  
    'direccion':new FormControl("",Validators.required), 'email':new FormControl("",[Validators.required,Validators.email]) } )

    procesar () {

       this.username=localStorage.getItem("username")

      if(localStorage.length>0 && this.username!=null){

        
      console.log(this.formulariodecompra.value)
      //this.user = new Usuario(this.formulariodeusuario.value.nombre!,this.formulariodeusuario.value.contra!,this.formulariodeusuario.value.email!);
      //this.userservice.AgregarUsuario(this.user);
      //alert(this.user)

      this.bandera2=true;
      this.Articuloscarrito.forEach(art => {this.importe= this.importe + art.getprecio()
        
      });

      
      this.compra=new Compra(this.importe,this.username,this.articulosvacio)
      this.comprar(this.compra);
      this.compraservice.AgregarCompra(this.compra).subscribe((compra1: any) => {
        console.log(compra1); 
        this.responseData=compra1;

          this.compra.setId(this.responseData.Id)
      
      })
      this.compraservice.agregaralcarrito(this.compra);

     // this.usuarioservice.AgregarCompra(this.compra);
      this.ArtService.SacarCarrito();
      this.cdr.detectChanges();


      }

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
        
    
    alert('se ha realizado la compra con exito');
   // if (c==undefined)
   //   {

    //  }
     // else
     // {
       // this.compraservice.AgregarCompra(c);

     // }
    this.bandera=true;
    //alert (this.compra.getImporte());
  }



}
