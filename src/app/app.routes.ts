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


export const routes: Routes = [

    { path: '', component: HomeComponent},
    { path: 'miscompras', component: MiscomprasComponent},
    { path: 'misdatos', component: MisdatosComponent},
    { path: 'carrito', component: CarritoComponent},
    { path: '**', redirectTo: ''}
  

];
 