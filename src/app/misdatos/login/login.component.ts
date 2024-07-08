import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { UsuarioService } from '../../../Servicios/usuario.service';
import { ArticuloService } from '../../../Servicios/articulos.service';
import { CompraService } from '../../../Servicios/compra.service';
import { Usuario } from '../../../Modelo/Usuario';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user:Usuario;
  bandera:boolean;

  constructor( private userservice:UsuarioService, private artservice:ArticuloService, private compraservice: CompraService){
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
     // this.userservice.iniciarsesion(this.user).subscribe((user: Usuario) => {
       // console.log(user);})
        

      //alert(this.user)
      this.bandera=true;
      
    }

}
