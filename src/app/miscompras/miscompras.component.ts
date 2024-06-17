import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-miscompras',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './miscompras.component.html',
  styleUrl: './miscompras.component.css'
})
export class MiscomprasComponent {

}
