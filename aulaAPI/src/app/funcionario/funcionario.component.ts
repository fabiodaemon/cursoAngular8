import { Component, OnInit } from '@angular/core'
import { FuncionarioService } from '../funcionario.service'
import { Funcionarios } from '../funcionarios'
import { map } from 'rxjs/operators'
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  constructor(private _funcionarioService: FuncionarioService) { }
  public funcionarios: Funcionarios[];

  ngOnInit() {
    this._funcionarioService.getFuncionarios()
    .subscribe(
      retorno => {
        this.funcionarios = retorno.map (item =>{
          return new Funcionarios(
            item.id,
            item.nome,
            item.departamento
          )
        })
      }
    )
  }

}
