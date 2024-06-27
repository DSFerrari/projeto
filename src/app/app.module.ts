import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovorelatorioComponent } from './novorelatorio/novorelatorio.component';
import { RegistrosComponent } from './registros/registros.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { VerregistroComponent } from './verregistro/verregistro.component';
import { VerrelatorioComponent } from './verrelatorio/verrelatorio.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RequisicoesComponent } from './requisicoes/requisicoes.component';

@NgModule({
  declarations: [
    AppComponent,
    NovorelatorioComponent,
    RegistrosComponent,
    RelatoriosComponent,
    SolicitacoesComponent,
    VerregistroComponent,
    VerrelatorioComponent,
    HomeComponent,
    NavbarComponent,
    RequisicoesComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
