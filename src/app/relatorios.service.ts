import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { relatorios } from './relatorios/relatorios';

@Injectable({
  providedIn: 'root'
})
export class RelatoriosService {

  url="http://localhost:3000/Relatórios"
  constructor(private http: HttpClient) { }

getRelatorios(): Observable<relatorios[]>{
  return this.http.get<relatorios[]>
  (this.url)
}
}
