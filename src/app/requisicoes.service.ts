import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { requisicoes } from './requisicoes/requisicoes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequisicoesService {

  url="http://localhost:3000/Requisições"
  constructor(private http: HttpClient) { }

getRequisicoes(): Observable<requisicoes[]>{
  return this.http.get<requisicoes[]>
  (this.url)
}
}
