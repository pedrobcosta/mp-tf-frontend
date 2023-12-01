import { Injectable } from '@angular/core';
import { UsuarioCriarContaDTO } from '../interfaces/usuarios';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private basePath = '/usuarios';

  constructor(private apiService: ApiService) { }

  public criarConta(novoUsuario: UsuarioCriarContaDTO) {
    this.apiService.post(this.basePath, novoUsuario);
  }
}
