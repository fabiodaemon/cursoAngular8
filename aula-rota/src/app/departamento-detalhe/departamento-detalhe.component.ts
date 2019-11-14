import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departamento-detalhe',
  templateUrl: './departamento-detalhe.component.html',
  styleUrls: ['./departamento-detalhe.component.css']
})
export class DepartamentoDetalheComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  public departamentoId;

  ngOnInit() {
    this.departamentoId = parseInt(this._route.snapshot.paramMap.get('id'));
  }

}
