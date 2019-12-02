import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Funcionarios } from './funcionarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private _httpClient: HttpClient) { }
  private url = "http://localhost:3000/funcionarios";

  getFuncionarios() : Observable<Funcionarios[]> {
    return this._httpClient.get<Funcionarios[]>(this.url);
  }
}
