
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../model/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent implements OnInit {
  cliente: Cliente = {} as Cliente;
  private service = inject(ClienteService);
  private router = inject(Router);
  confirmarSenha: string = '';

  // Injeta o ActivatedRoute para acessar os parâmetros da rota
  private route = inject(ActivatedRoute);
  clienteId: string | null = this.route.snapshot.paramMap.get('id')

  ngOnInit(): void {
    if (this.clienteId) {
      this.service.buscarPorId(this.clienteId).subscribe({
        next: (cliente) => this.cliente = cliente,
        error: () => alert('Cliente não encontrado!')
      });

    }
  }

  salvar(): void {
    if (this.cliente.senha !== this.confirmarSenha) {
      alert('As senhas não são iguais.');
      return;

    }

    if (this.clienteId) {
      //Modo de alteração
      this.service.editar(this.cliente).subscribe({
        next: (cliente) => {
          this.cliente = cliente;
          this.router.navigate(['/admin-clientes-listar']);
        }
      }
      );

    } else {
      //Modo de inclusão
      this.service.incluir(this.cliente).subscribe({
        next: (cliente) => {
          this.cliente = cliente;
          alert('Cliente cadastrado com sucesso');
          this.router.navigate(['/admin-clientes-listar']);
        }
      });

    }
  }
}
