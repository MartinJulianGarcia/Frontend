import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { FormControl, Validators,FormGroup } from '@angular/forms';  // cuando se importan componentes van solo aca, los modulos se importan tamb abajo
import { Usuario } from '../../../Modelo/Usuario';
import { UsuarioService } from '../../../Servicios/usuario.service';
import { ArticuloService } from '../../../Servicios/articulos.service';
import { Compra } from '../../../Modelo/Compra';
import { CompraService } from '../../../Servicios/compra.service';
import { Router, ActivatedRoute } from '@angular/router';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, NgFor,NgIf],
  providers: [UsuarioService],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {


 // nombre=new FormControl("",Validators.required);
  //contra=new FormControl("",Validators.required);
 //email=new FormControl("",[Validators.required,Validators.email]);

  user:Usuario;
  bandera:boolean;
  banderaadmin:boolean
  selectedValue: string;

  constructor( private userservice:UsuarioService, private artservice:ArticuloService, private compraservice: CompraService, private router: Router, private route: ActivatedRoute){
    this.user=new Usuario("juan", "falso","1");
    this.bandera=false;
    this.banderaadmin=false;
    this.selectedValue="Cliente";
    
    
  }

  items = [
    { value: 'Cliente', display: 'Cliente' },
    { value: 'Administrador', display: 'Administrador' },
  
  ];

 get nombre () {
  return this.formulariodeusuario.get('nombre')  as FormControl;   // esto es par ano tener que escribir tdo en cada vez pero no lo uso 
 }

  formulariodeusuario = new FormGroup({'nombre':new FormControl("",[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),  
    'contra':new FormControl("",[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),'Admin':new FormControl("",Validators.required), 'email':new FormControl("",[Validators.required,Validators.email]) } )

    procesar () {

      console.log(this.formulariodeusuario.value)
      this.user = new Usuario(this.formulariodeusuario.value.nombre!,this.formulariodeusuario.value.contra!,this.formulariodeusuario.value.email!);
     // this.banderaadmin=this.formulariodeusuario.value.Admin!
     if (this.selectedValue=="Cliente")
     {
      this.banderaadmin=false;
     }
     else{this.banderaadmin=true;}

      this.userservice.RegistrarUsuario(this.user,this.banderaadmin).subscribe((user: Usuario) => {
        console.log(user);
        if (user!=undefined)
        {  sessionStorage.setItem('username', this.user.getNombre());
          sessionStorage.setItem('password', this.user.getContra());
          sessionStorage.setItem('Rango', this.selectedValue);
          
          this.bandera=true;

          alert ("welcome "+ this.user.getNombre());
        }
        else{
          this.bandera=false;
        }
      })

        
        
        this.refrescarPagina();

        //this.route.snapshot
      //alert(this.user)
    
      
    }

    refrescarPagina() {
      const rutaActual = this.router.url;
      const rutaTemporal = '/ruta-temporal';
  
      // Navegar a una ruta temporal y luego volver a la ruta original
      this.router.navigateByUrl("/footer").then(() => {
        setTimeout(() => this.router.navigateByUrl(rutaActual), 100);
      });
    }

}
