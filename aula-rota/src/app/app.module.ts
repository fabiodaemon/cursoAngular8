import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DepartamentoDetalheComponent } from './departamento-detalhe/departamento-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioComponent,
    DepartamentoComponent,
    HomeComponent,
    PagenotfoundComponent,
    DepartamentoDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
