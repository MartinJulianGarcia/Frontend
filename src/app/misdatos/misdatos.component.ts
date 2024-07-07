import { Component, OnInit } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-misdatos',
  standalone: true,
  imports: [FormularioComponent,NgIf,NgFor],
  templateUrl: './misdatos.component.html',
  styleUrl: './misdatos.component.css'
})
export class MisdatosComponent implements OnInit{

  banderausuarioiniciado=false;
  nombreusuario: String="";


  ngOnInit(): void {
 
    if(localStorage.length>0)
    {
      this.banderausuarioiniciado=true;
      const nombre=localStorage.getItem('username')
      if(nombre!=null)
      {
         this.nombreusuario=nombre;
      }
      else{
        this.nombreusuario="";
      }
      
    }
    

}

}

 
