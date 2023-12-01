import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private domain = 'localhost:8000';

  constructor(private httpClient: HttpClient) {}

  public get(path: string) {
    const url = this.domain + path
    return this.httpClient.get(url);
  }
  
  public post(path: string, body: any) {
    const url = this.domain + path
    return this.httpClient.post(url, body);
  }

  public put(path: string, body: any) {
    const url = this.domain + path
    return this.httpClient.put(url, body);
  }

  public delete(path: string) {
    const url = this.domain + path
    return this.httpClient.delete(url);
  }
}
