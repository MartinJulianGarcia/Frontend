import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { UsuarioService } from '../../Servicios/usuario.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,RouterModule, NgIf,NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  banderausuarioiniciado:boolean;
  nombredeusuario='';

  constructor(private cdr: ChangeDetectorRef){
    this.banderausuarioiniciado=false;
  }

  ngOnInit(): void {
  
    if(sessionStorage.length>0)
      {
        this.banderausuarioiniciado=true;
        const nombre=sessionStorage.getItem('username')
        if(nombre!=null)
        {
           this.nombredeusuario=nombre;
        }
        else{
          this.nombredeusuario="";
        }
        
      }
   
}
cerrarsesion(){
  sessionStorage.clear();
  alert("se ha abandonado la sesion")
  this.banderausuarioiniciado=false
  this.cdr.detectChanges();
}

chequeosesion() 
{
  if(sessionStorage.length>0)
    {
      this.banderausuarioiniciado=true;
      const nombre=sessionStorage.getItem('username')
      if(nombre!=null)
      {
         this.nombredeusuario=nombre;
      }
      else{
        this.nombredeusuario="";
      }
      
    }
 
}



}
