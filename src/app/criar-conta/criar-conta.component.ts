import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { UsuarioCriarContaDTO } from '../interfaces/usuarios';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent {

  novoUsuario = {} as UsuarioCriarContaDTO;

  constructor(private usuarioService: UsuarioService) {}

  criarConta() {
    console.log(this.novoUsuario.email);
    this.usuarioService.criarConta(this.novoUsuario);
  }
}
