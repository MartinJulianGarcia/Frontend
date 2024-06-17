import { Component } from '@angular/core';

import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MainComponent } from '../main/main.component';
import { ArticuloComponent } from '../main/articulo/articulo.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,NgIf, RouterOutlet, HeaderComponent, FooterComponent, MainComponent, ArticuloComponent, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
