import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FuncionarioListaComponent } from './funcionario-lista/funcionario-lista.component';
import { FuncionarioDetalheComponent } from './funcionario-detalhe/funcionario-detalhe.component';
import { FuncionarioService } from './funcionario.service';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioListaComponent,
    FuncionarioDetalheComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FuncionarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
