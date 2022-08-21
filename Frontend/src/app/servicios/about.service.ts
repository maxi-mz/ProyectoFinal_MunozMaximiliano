import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../Entidades/usuarios';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor( private http:HttpClient) { }

  public getUsuario():Observable<Usuario>{
    return this.http.get<Usuario>('http://localhost:8080/usuario/id/1');
  }

  public updateUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.put<Usuario>('http://localhost:8080/usuario/actualizar',usuario);
  }
}