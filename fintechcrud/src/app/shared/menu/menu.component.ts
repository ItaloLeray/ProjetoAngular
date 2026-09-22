import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { link } from 'fs';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {
  itensMenu = [
    { label: 'Inicio', link: '' },
    { label: 'Clientes', link: '/clientes' },
    { label: 'Sobre', link: '/sobre' },
    { label: 'Ajuda', link: '/ajuda'}
  ]
}