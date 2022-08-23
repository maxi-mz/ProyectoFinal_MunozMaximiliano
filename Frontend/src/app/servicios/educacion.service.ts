import { Educacion } from './../Entidades/educacion';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor( private http:HttpClient) { }
  
  public listarEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>('http://localhost:8080/educacion/listar');
  }

  public actualizarEducacion(educacion:Educacion):Observable<Educacion>{
    return this.http.put<Educacion>('http://localhost:8080/educacion/actualizar',educacion);
  }

  public agregarEducacion(educacion:Educacion):Observable<Educacion>{
    return this.http.post<Educacion>('http://localhost:8080/educacion/agregar',educacion)
  }

  public borrarEducacion(id:number):Observable<void>{
    return this.http.delete<void>('http://localhost:8080/educacion/borrar/id/' + id )
  }

  public obtenerPorId(id: number): Observable<Educacion>{
    return this.http.get<Educacion>(`http://localhost:8080/educacion/${id}`);
  }
  
  
}
