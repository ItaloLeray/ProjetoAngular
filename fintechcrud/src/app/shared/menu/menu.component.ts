import { Component } from '@angular/core';
import { link } from 'fs';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {
  itensMenu = [
    { label: 'Inicio', link: '' },
    { label: 'Clientes', link: '/clientes' },
    { label: 'Sobre', link: '/sobre' },
  ]
}