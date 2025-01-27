import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NovorelatorioComponent } from './novorelatorio/novorelatorio.component';
import { RegistroComponent } from './registros/registros.component';
import { RelatorioComponent } from './relatorios/relatorios.component';
import { RequisicoesComponent } from './requisicoes/requisicoes.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'novorelatorio', component:NovorelatorioComponent},
  {path:'registros', component:RegistroComponent},
  {path:'relatorios', component:RelatorioComponent},
  {path:'requisicoes', component:RequisicoesComponent},
  {path:'solicitacoes', component:SolicitacoesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
