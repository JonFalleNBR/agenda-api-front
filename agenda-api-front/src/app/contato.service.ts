import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contato } from './contato/contato';
import { Observable } from 'rxjs';
import { enviroment } from './enviroments';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  url : string = enviroment.apiBaseURL;

  constructor(
    private http: HttpClient
  ) { }

  save(contato: Contato) : Observable<Contato>{
      return this.http.post<Contato>(this.url, contato);
  }
}
