import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "funcionario", component: FuncionarioComponent},
  {path: "departamento", component: DepartamentoComponent},
  {path: "**", component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
