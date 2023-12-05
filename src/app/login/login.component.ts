import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService) {}
  modelo: any = {}; 
  
  onSubmit() {
    console.log('Formulário enviado:', this.modelo);
    this.authService.login(this.modelo.username, this.modelo.email, this.modelo.password).subscribe(
      (resposta) => {
        console.log(resposta)
      },
      (erro) => {
        console.error(erro)
      }
    )
  }

}
