import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ArticuloComponent } from './articulo/articulo.component';
import { Articulo } from '../../Modelo/Articulo';
import { ArticuloService } from '../../Servicios/articulos.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { HttpService } from '../../Servicios/http.service';
import { FormularioarticuloComponent } from './formularioarticulo/formularioarticulo.component';
import { FormControl, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgFor,NgIf,ArticuloComponent, FormularioarticuloComponent, FormsModule,ReactiveFormsModule],   // como son Standalone, debo importar los modulos y no usar un app.module.ts
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent implements OnInit ,OnChanges{

  Articulos: Array<Articulo>=[]
  devolucionarts: Array<Articulo>=[];
  errorMessage:string | undefined;
  filtro="todos";
  bandera=true;
  banderaeliminar=true;
 
  nombrealiminar=''
  banderanoexiste=true;

  UsuarioAdmin=false;

  

  constructor( private ArtService:ArticuloService, private router: Router, private cdr: ChangeDetectorRef) { 
    
    
    
   // const art1 = new Articulo("Remera1", "Remera", 500, 1, 20, "Verano")
    //const art2 = new Articulo("Remera2", "Remera",1000, 2 , 40, "Invierno")
   // const art3 = new Articulo("Remera3", "Remera",1200, 3 , 0, "Verano")

  //  this.Articulos = []
   // this.devolucionarts=[];

  }

  ngOnInit(): void {
   //this.Articulos = this.ArtService.getArticulosfiltrados()
    //this.Articulos= this.ArtService.getArticulosHTTP()
    this.ArtService.getArticulosHTTP().subscribe((art) => {console.log(art); this.devolucionarts=art; console.log( art.length)});
    console.log("algo hace pero no devuelve datos: "+ this.devolucionarts.length )

    //alert(this.ArtService.getfiltro());
    this.filtro=this.ArtService.getfiltro()

    if (sessionStorage.getItem('Rango')=="Administrador")
    {
      this.UsuarioAdmin=true;
    }
    else{
      this.UsuarioAdmin=false;
    }

   // this.devolucionarts=this.ArtService.actualizar(this.devolucionarts); incluso aunque llame al service no actualiza el front

    //this.Articulos=this.devolucionarts.filter(Articulo => Articulo.getTipo() == "remera");
   
   
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    this.ArtService.getArticulosHTTP().subscribe((art) => {console.log(art); this.devolucionarts=art; console.log( art.length)});
    console.log("algo hace pero no devuelve datos: "+ this.devolucionarts.length )

    //alert(this.ArtService.getfiltro());
    this.filtro=this.ArtService.getfiltro()
  }

  actualizar(): void {

    if (sessionStorage.length>0)
      {
    this.bandera=false;
     }
    else {
      alert("debe estar logueado para agregar articulos");
      this.router.navigate(['/misdatos']);
    }
    }

   //this.Articulos = this.ArtService.getArticulosfiltrados();
  // alert('el evento si funciona pero no se actualiza la vista')

  
  
  actualizar2(): void {

    if (sessionStorage.length>0)
    {
      this.banderaeliminar=false;
    }
    else{ alert("debe estar logueado para eliminar articulos"); this.router.navigate(['/misdatos']);}
    

   // this.devolucionarts.forEach(element => { 
     // if(this.nombrealiminar!=null && this.nombrealiminar.name==element.getNombre())
    //  {
     //  alert( element.getNombre() + "fue eliminado")
     // }
     // else
     // {alert(this.nombrealiminar.name)}

     
     // })
    }
    submit(): void{

     // alert (this.nombrealiminar)
      
    this.devolucionarts.forEach(element => { 
      if(this.nombrealiminar!=null && this.nombrealiminar==element.getNombre())
     {
       alert( element.getNombre() + " fue eliminado")
       this.banderanoexiste=false;
       this.ArtService.deletetArticulosHTTP(element).subscribe((art) => {console.log(art);});
       //this.router.navigate(['/misdatos']);
       this.cdr?.detectChanges();
       this.cdr.markForCheck();
      }
     
      
     
      })
      if (this.banderanoexiste==true)
        {
          alert("el nombre ingresado no corresponde a un articulo")
        }
        this.banderanoexiste=false;

    }


    
}
