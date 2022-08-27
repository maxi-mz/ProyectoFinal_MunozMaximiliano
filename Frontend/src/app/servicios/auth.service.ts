import { JwtDto } from './../Entidades/JwtDto';
import { Observable } from 'rxjs';
import { LoginUsuario } from './../Entidades/LoginUsuario';
import { NuevoUsuario } from './../Entidades/NuevoUsuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:8080/auth/';

  constructor(private HttpClient: HttpClient) { }

 public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
   return this.HttpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
 }

 public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
   return this.HttpClient.post<JwtDto>(this.authURL + 'login', loginUsuario)
 }
}
