import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario-lista',
  templateUrl: './funcionario-lista.component.html',
  styleUrls: ['./funcionario-lista.component.css']
})
export class FuncionarioListaComponent implements OnInit {

  public funcionarios = [];

  constructor(private _funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.funcionarios = this._funcionarioService.getFuncionarios();
  }

}
