import { Component, OnInit } from '@angular/core';
import { FormularioComponent } from './formulario/formulario.component';
import { NgFor, NgIf } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';
import { LoginComponent } from './login/login.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-misdatos',
  standalone: true,
  imports: [FormularioComponent,NgIf,NgFor, RouterOutlet, LoginComponent,RouterModule],
  templateUrl: './misdatos.component.html',
  styleUrl: './misdatos.component.css'
})
export class MisdatosComponent implements OnInit{

  banderausuarioiniciado=false;
  yaregistrado=false;
  nombreusuario: String="";


  constructor(private router: Router, private route: ActivatedRoute){

  }


  ngOnInit(): void {
 
    if(sessionStorage.length>0)
    {
      
      const nombre=sessionStorage.getItem('username')
      if(nombre!=null)
      {
         this.nombreusuario=nombre;
         this.banderausuarioiniciado=true;
         
      }
      else{
        this.nombreusuario="";
      }
      
    }
}

Iniciardirecto(){
  if(this.yaregistrado==false)
  this.yaregistrado=true;
  else{this.yaregistrado=false; this.router.navigateByUrl("/misdatos")}
 
}
cerrarsesion(){
  sessionStorage.clear();
  localStorage.clear();
  alert("se ha abandonado la sesion")
  this.banderausuarioiniciado=false
 
}


}

 
