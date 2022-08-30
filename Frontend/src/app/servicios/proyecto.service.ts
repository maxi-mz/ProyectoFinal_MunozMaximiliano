import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../Entidades/Proyecto';


@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http:HttpClient) { }

  public listarProyecto():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>('http://localhost:8080/proyecto/listar');
  }

  public actualizarProyecto(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.put<Proyecto>('http://localhost:8080/proyecto/actualizar',proyecto);
  }

  public agregarProyecto(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.post<Proyecto>('http://localhost:8080/proyecto/agregar',proyecto)
  }

  public borrarProyecto(id:number):Observable<void>{
    return this.http.delete<void>('http://localhost:8080/proyecto/borrar/id/' + id )
  }

  public obtenerPorId(id: number): Observable<Proyecto>{
    return this.http.get<Proyecto>(`http://localhost:8080/proyecto/${id}`);
  }
}
