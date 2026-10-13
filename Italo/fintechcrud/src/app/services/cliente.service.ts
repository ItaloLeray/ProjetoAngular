import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  listar(): Cliente[]{
    return [{ id: 1, 
              nome: "Italo",
              sobrenome: "Adriano",
              dataNascimento: "2008-06-15",
              email: "italogleray@gmail.com",
              cpf: "50138092826"
            },

            { id: 2, 
              nome: "Igor",
              sobrenome: "Alves",
              dataNascimento: "2008-01-25",
              email: "iguinho@gmail.com",
              cpf: "12345678901"
            }
            
            
            ]
  }




}
