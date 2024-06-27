import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { novorelatorio } from './novorelatorio/novorelatorio';

@Injectable({
  providedIn: 'root'
})
export class NovorelatorioService {

  url="http://localhost:3000/novorelatorio"
  constructor(private http: HttpClient) { }

getNovorrelatorio(): Observable<novorelatorio[]>{
  return this.http.get<novorelatorio[]>
  (this.url)
}
save(novorelatorio:novorelatorio): Observable<novorelatorio>{
  return this.http.post<novorelatorio>(this.url, novorelatorio)
}}