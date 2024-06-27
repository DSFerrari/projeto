import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { registros } from './registros/registros';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

    url="http://localhost:3000/Registros"
    constructor(private http: HttpClient) { }

  getRegistros(): Observable<registros[]>{
    return this.http.get<registros[]>
    (this.url)
  }
}
