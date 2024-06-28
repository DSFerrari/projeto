import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovorelatorioComponent } from './novorelatorio/novorelatorio.component';
import { RegistroComponent } from './registros/registros.component';
import { RelatorioComponent } from './relatorios/relatorios.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RequisicoesComponent } from './requisicoes/requisicoes.component';

@NgModule({
  declarations: [
    AppComponent,
    NovorelatorioComponent,
    RegistroComponent,
    RelatorioComponent,
    SolicitacoesComponent,
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
