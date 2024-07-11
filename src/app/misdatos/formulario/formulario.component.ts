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

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
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

  constructor( private userservice:UsuarioService, private artservice:ArticuloService, private compraservice: CompraService, private router: Router, private route: ActivatedRoute){
    this.user=new Usuario("juan", "falso","1");
    this.bandera=false;
    
    
  }

 get nombre () {
  return this.formulariodeusuario.get('nombre')  as FormControl;   // esto es par ano tener que escribir tdo en cada vez pero no lo uso 
 }

  formulariodeusuario = new FormGroup({'nombre':new FormControl("",Validators.required),  
    'contra':new FormControl("",Validators.required), 'email':new FormControl("",[Validators.required,Validators.email]) } )

    procesar () {

      console.log(this.formulariodeusuario.value)
      this.user = new Usuario(this.formulariodeusuario.value.nombre!,this.formulariodeusuario.value.contra!,this.formulariodeusuario.value.email!);
      this.userservice.RegistrarUsuario(this.user).subscribe((user: Usuario) => {
        console.log(user);
        if (user!=undefined)
        {  localStorage.setItem('username', this.user.getNombre());
          localStorage.setItem('password', this.user.getContra());
          
          this.bandera=true;

          alert ("wlecome"+ this.user.getNombre());
        }
        else{
          this.bandera=false;
        }
      })

        
        
        this.router.navigate(['/']);
      //alert(this.user)
    
      
    }

}
