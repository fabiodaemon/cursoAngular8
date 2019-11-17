import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FuncionarioListaComponent } from './funcionario-lista/funcionario-lista.component';
import { FuncionarioDetalheComponent } from './funcionario-detalhe/funcionario-detalhe.component';
import { FuncionarioService } from './funcionario.service';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';

import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";

import { environment } from 'src/environments/environment';
import { ListComponent } from './funcionarios/list/list.component';
import { EditComponent } from './funcionarios/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    FuncionarioListaComponent,
    FuncionarioDetalheComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [FuncionarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
