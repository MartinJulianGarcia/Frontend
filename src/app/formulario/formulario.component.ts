import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { FormControl, Validators,FormGroup } from '@angular/forms';  // cuando se importan componentes van solo aca, los modulos se importan tamb abajo
import { Usuario } from '../../Modelo/Usuario';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {


 // nombre=new FormControl("",Validators.required);
  //contra=new FormControl("",Validators.required);
 //email=new FormControl("",[Validators.required,Validators.email]);

  user:Usuario;

  constructor(){
    this.user=new Usuario("juan", "falso","1");
  }

 get nombre () {
  return this.formulariodeusuario.get('nombre')  as FormControl;   // esto es par ano tener que escribir tdo en cada vez pero no lo uso 
 }

  formulariodeusuario = new FormGroup({'nombre':new FormControl("",Validators.required),  
    'contra':new FormControl("",Validators.required), 'email':new FormControl("",[Validators.required,Validators.email]) } )

    procesar () {

      console.log(this.formulariodeusuario.value)
      this.user = new Usuario(this.formulariodeusuario.value.nombre!,this.formulariodeusuario.value.contra!,this.formulariodeusuario.value.email!);

    }

}
