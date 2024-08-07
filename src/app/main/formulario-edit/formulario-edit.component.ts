import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { FormControl, Validators,FormGroup } from '@angular/forms';  // cuando se importan componentes van solo aca, los modulos se importan tamb abajo
import { Usuario } from '../../../Modelo/Usuario';
import { UsuarioService } from '../../../Servicios/usuario.service';
import { ArticuloService } from '../../../Servicios/articulos.service';
import { Compra } from '../../../Modelo/Compra';
import { CompraService } from '../../../Servicios/compra.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Articulo } from '../../../Modelo/Articulo';
import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-formulario-edit',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgFor,NgIf],
  templateUrl: './formulario-edit.component.html',
  styleUrl: './formulario-edit.component.css'
})
export class FormularioEditComponent {

  @Input () Articulo?: Articulo


  user:Usuario;
 bandera:boolean;
 art:Articulo;
 selectedValue: String;
 selectedValue2:String;
 username:String | null

 constructor( private userservice:UsuarioService, private artservice:ArticuloService, private compraservice: CompraService, private router: Router, private route: ActivatedRoute, private cdr: ChangeDetectorRef){
   this.user=new Usuario("juan", "falso","1");
   this.bandera=false;
   this.art=new Articulo("art",500,20,"verano","pantalon")
   this.selectedValue="verano";
   this.username="";
   this.selectedValue2="remera";
   

 }


 items = [
  { value: "verano", display: 'verano' },
  { value: "invierno", display: 'invierno' },

];

itemstipo = [
  { value: "remera", display: 'remera' },
  { value: "pantalon", display: 'pantalon' },
  { value: "abrigo", display: 'abrigo' },

];







 formulariodearticulo = new FormGroup({ 
   'stock':new FormControl("",[Validators.required, Validators.pattern('^[0-9]+$')]),'precio':new FormControl("",[Validators.required, Validators.pattern('^[0-9]+$')]),
   'temporada':new FormControl("",Validators.required), 'tipo':new FormControl("",[Validators.required]) } )

   procesar () {

     console.log(this.formulariodearticulo.value)
      if(this.Articulo){
        this.art= new Articulo(this.Articulo?.getNombre(),Number(this.formulariodearticulo.value.precio!),Number(this.formulariodearticulo.value.stock!),this.formulariodearticulo.value.temporada!,this.formulariodearticulo.value.tipo!);
        this.username = sessionStorage.getItem('username');
      
    
     if (this.username!=null){
    
     this.artservice.PutArticulosHTTP(this.art).subscribe((artquevino: Articulo) => {console.log(artquevino)})
     alert("articulo Modificado")
     this.cdr.detectChanges();
     this.cdr.markForCheck();
     }
     else {
      alert("debe estar logueado para editar un articulo");
     }
     this.refrescarPagina();
    }
       //console.log(this.art);
       
      // this.router.navigate(['/misdatos']);
      
     //alert(this.user)
   // this.bandera=true;
     
   }

     // alert('el evento si funciona pero no se actualiza la vista')
  refrescarPagina() {
    const rutaActual = this.router.url;
    

    // Navegar a una ruta temporal y luego volver a la ruta original
    this.router.navigateByUrl("/footer").then(() => {
      setTimeout(() => this.router.navigateByUrl(rutaActual), 100);
    });
  }

}
