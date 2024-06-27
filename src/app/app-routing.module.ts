import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NovorelatorioComponent } from './novorelatorio/novorelatorio.component';
import { RegistrosComponent } from './registros/registros.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { RequisicoesComponent } from './requisicoes/requisicoes.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { VerregistroComponent } from './verregistro/verregistro.component';
import { VerrelatorioComponent } from './verrelatorio/verrelatorio.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'novorelatorio', component:NovorelatorioComponent},
  {path:'registros', component:RegistrosComponent},
  {path:'relatorios', component:RelatoriosComponent},
  {path:'requisicoes', component:RequisicoesComponent},
  {path:'solicitacoes', component:SolicitacoesComponent},
  {path:'verregistro', component:VerregistroComponent},
  {path:'verrelatorios', component:VerrelatorioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
