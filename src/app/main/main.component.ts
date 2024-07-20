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
import { FormularioEditComponent } from './formulario-edit/formulario-edit.component';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgFor, NgIf, ArticuloComponent, FormularioarticuloComponent, FormsModule, ReactiveFormsModule, FormularioEditComponent],   // como son Standalone, debo importar los modulos y no usar un app.module.ts
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent implements OnInit ,OnChanges{

  Articulos: Array<Articulo>=[]
  devolucionarts: Array<Articulo>=[];
  Articuloapasar: Articulo | undefined;

  errorMessage:string | undefined;
  filtro="todos";
  bandera=true;
  banderaeliminar=true;

  banderaeditar=true;
  banderaeditarformulario=true;
  nombreaeditar=''
 
  nombrealiminar=''
  banderanoexiste=true;

  UsuarioAdmin=false;
  categoria: string | null = null;

  

  constructor( private ArtService:ArticuloService, private router: Router, private cdr: ChangeDetectorRef, private route: ActivatedRoute,) { 
    
    
    
   // const art1 = new Articulo("Remera1", "Remera", 500, 1, 20, "Verano")
    //const art2 = new Articulo("Remera2", "Remera",1000, 2 , 40, "Invierno")
   // const art3 = new Articulo("Remera3", "Remera",1200, 3 , 0, "Verano")

  //  this.Articulos = []
   // this.devolucionarts=[];
   this.cdr.markForCheck();

   this.ArtService.articulos$.subscribe(articulos => {
    this.Articulos = articulos;
    
    
  });
  

  }

  ngOnInit(): void {
   //this.Articulos = this.ArtService.getArticulosfiltrados()
    //this.Articulos= this.ArtService.getArticulosHTTP()
    this.ArtService.getArticulosHTTP().subscribe((art) => {console.log(art); this.devolucionarts=art; console.log( art.length)});
    console.log( this.devolucionarts.length )

    //alert(this.ArtService.getfiltro());
    //this.filtro=this.ArtService.getfiltro()

    if (sessionStorage.getItem('Rango')=="Administrador")
    {
      this.UsuarioAdmin=true;
    }
    else{
      this.UsuarioAdmin=false;
    }
   
    this.cdr.detectChanges();

    this.route.paramMap.subscribe(params => {
      this.categoria = params.get('categoria');
      this.recargarelementos();
    });

    if (this.categoria) {
      this.filtro=this.categoria
      }
   else {
       this.filtro="todos";
      };
    }
  
    

   // this.devolucionarts=this.ArtService.actualizar(this.devolucionarts); incluso aunque llame al service no actualiza el front

    //this.Articulos=this.devolucionarts.filter(Articulo => Articulo.getTipo() == "remera");
   
   
  

  ngOnChanges(changes: SimpleChanges): void {
    
    this.ArtService.getArticulosHTTP().subscribe((art) => {console.log(art); this.devolucionarts=art; console.log( art.length)});
    console.log( this.devolucionarts.length )

    //alert(this.ArtService.getfiltro());
    this.filtro=this.ArtService.getfiltro()
  
    this.cdr.detectChanges();
    
  }

  recargarelementos(){

    this.ArtService.getArticulosHTTP().subscribe((art) => {console.log(art); this.devolucionarts=art; console.log( art.length)});
    console.log( this.devolucionarts.length )

    //alert(this.ArtService.getfiltro());
    this.filtro=this.ArtService.getfiltro()
  
    this.cdr.detectChanges();

  }

  actualizar(): void {

    if (sessionStorage.length>0 && this.bandera==true)
      {
        this.bandera=false;
      }
      else if(sessionStorage.length>0 && this.bandera==false)
      {
        this.bandera=true;
      }
    else {
      alert("debe estar logueado para agregar articulos");
      this.router.navigate(['/misdatos']);
    }
    }

   //this.Articulos = this.ArtService.getArticulosfiltrados();
  // alert('el evento si funciona pero no se actualiza la vista')
  refrescarPagina() {
    const rutaActual = this.router.url;
    const rutaTemporal = '/ruta-temporal';

    // Navegar a una ruta temporal y luego volver a la ruta original
    this.router.navigateByUrl("/footer").then(() => {
      setTimeout(() => this.router.navigateByUrl(rutaActual), 100);
    });
  }
  
  
  actualizar2(): void {

    if (sessionStorage.length>0 && this.banderaeliminar==true)
    {
      this.banderaeliminar=false;
    }
    else if(sessionStorage.length>0 && this.banderaeliminar==false)
    {
      this.banderaeliminar=true;
    }
    else{ alert("debe estar logueado para eliminar articulos"); this.router.navigate(['/misdatos']);}
   }


    actualizar3(): void {

      if (sessionStorage.length>0 && this.banderaeditar==true)
        {
          this.banderaeditar=false;
        }
        else if(sessionStorage.length>0 && this.banderaeditar==false)
        {
          this.banderaeditar=true;
        }
        else{ alert("debe estar logueado para eliminar articulos"); this.router.navigate(['/misdatos']);}
    }

   // this.devolucionarts.forEach(element => { 
     // if(this.nombrealiminar!=null && this.nombrealiminar.name==element.getNombre())
    //  {
     //  alert( element.getNombre() + "fue eliminado")
     // }
     // else
     // {alert(this.nombrealiminar.name)}

     
     // })
    
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
       this.refrescarPagina();
      }
     
      
     
      })
      if (this.banderanoexiste==true)
        {
          alert("el nombre ingresado no corresponde a un articulo")
        }
        this.banderanoexiste=true;

       // this.refrescarPagina();

    }


    submitedit(): void{

      // alert (this.nombrealiminar)
       
     this.devolucionarts.forEach(element => { 
       if(this.nombreaeditar!=null && this.nombreaeditar==element.getNombre())
      {
        alert( element.getNombre() + " se puede editar en cantidad y stock, complete los campos")
        this.banderanoexiste=false;
        this.banderaeditarformulario=false;
        this.Articuloapasar=element;
       // this.ArtService.deletetArticulosHTTP(element).subscribe((art) => {console.log(art);});
        //this.router.navigate(['/misdatos']);
      // this.cdr?.detectChanges();
      //  this.cdr.markForCheck();
        //this.refrescarPagina();
       }
      
       
      
       })
       if (this.banderanoexiste==true)
         {
           alert("el nombre ingresado no corresponde a un articulo")
         }
         this.banderanoexiste=true;
 
       // this.refrescarPagina();
 
     }


    
}
