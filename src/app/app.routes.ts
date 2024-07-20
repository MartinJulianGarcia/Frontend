import { Routes, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ArticuloComponent } from './main/articulo/articulo.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MiscomprasComponent } from './miscompras/miscompras.component';
import { MisdatosComponent } from './misdatos/misdatos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FormulariodecompraComponent } from './carrito/formulariodecompra/formulariodecompra.component';
import { ResumenCarritoComponent } from './carrito/resumen-carrito/resumen-carrito.component';
import { LoginComponent } from './misdatos/login/login.component';


export const routes: Routes = [

    { path: 'home', component: HomeComponent},
    { path: 'home/:categoria', component: HomeComponent},
    
    { path: 'miscompras', component: MiscomprasComponent},
    { path: 'misdatos', component: MisdatosComponent, children: [
      { path: "section-a", component: LoginComponent},
    ]},
    { path: 'carrito', component: CarritoComponent, children: [
        { path: "section-a", component: ResumenCarritoComponent},
        { path: "section-b", component: FormulariodecompraComponent},
      ]
    },
    { path: 'footer', component: FooterComponent},
   
    { path: '**', redirectTo: 'home'}
  

];
 