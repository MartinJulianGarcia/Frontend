import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ArticuloComponent } from './main/articulo/articulo.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarritoComponent } from './carrito/carrito.component';
import { MiscomprasComponent } from './miscompras/miscompras.component';
import { ArticuloService } from '../Servicios/articulos.service';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { HttpClient } from '@angular/common/http';

import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NgFor,NgIf, RouterOutlet, HeaderComponent, FooterComponent, MainComponent, ArticuloComponent, SidebarComponent,CarritoComponent,MiscomprasComponent,RouterModule, FormularioComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend-Tienda-mg';
}
