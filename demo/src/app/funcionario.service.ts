import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor() { }

  getFuncionarios(){
    return[
      {"id":1, "nome":"Eduardo", "idade":41},
      {"id":2, "nome":"João", "idade":36},
      {"id":3, "nome":"Pedro", "idade":55},
      {"id":4, "nome":"Maria", "idade":22},
      {"id":5, "nome":"Luiza", "idade":29},
    ];
  }
}
