import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor (private router: Router){};

  login: string = "";
  senha: string = "";
  botaoDesabilitado: boolean = true;

  validarFormulario() {
    if (this.login.trim() !== "" && this.senha.trim() !== "") {
      this.botaoDesabilitado = false;
    }
    else {
      this.botaoDesabilitado = true;
    }
  }

  fazerLogin() {
    if (this.login === 'admin@email.com' && this.senha === '123') {
      alert(`Bem-vindo ${this.login}!`);
      this.router.navigate(['']);
    } else {
      alert('Dados inválidos');
    }

  }

}