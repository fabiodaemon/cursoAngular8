import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario-detalhe',
  templateUrl: './funcionario-detalhe.component.html',
  styleUrls: ['./funcionario-detalhe.component.css']
})
export class FuncionarioDetalheComponent implements OnInit {

  public funcionarios = [];

  constructor(private _funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.funcionarios = this._funcionarioService.getFuncionarios();
  }


}
