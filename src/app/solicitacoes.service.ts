import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { solicitacoes } from './solicitacoes/solicitacoes';

@Injectable({
  providedIn: 'root'
})
export class SolicitacoesService {

  url="http://localhost:3000/Solicitações"
  constructor(private http: HttpClient) { }

getSolicitacoes(): Observable<solicitacoes[]>{
  return this.http.get<solicitacoes[]>
  (this.url)
}
}
