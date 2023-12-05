import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/token/';

  constructor(private http: HttpClient) {}

  login(username: string, email: string, password: string): Observable<any> {
    // Define os parâmetros do corpo da requisição
    const body = {
      username: username,
      email: email,
      password: password,
    };

    // Define o cabeçalho da requisição
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Faz a requisição POST
    return this.http.post<any>(this.apiUrl, body, { headers: headers });
  }
}