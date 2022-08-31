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
    return this.http.get<Proyecto[]>('https://portfolio-maxi.herokuapp.com/proyecto/listar');
  }

  public actualizarProyecto(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.put<Proyecto>('https://portfolio-maxi.herokuapp.com/proyecto/actualizar',proyecto);
  }

  public agregarProyecto(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.post<Proyecto>('https://portfolio-maxi.herokuapp.com/proyecto/agregar',proyecto)
  }

  public borrarProyecto(id:number):Observable<void>{
    return this.http.delete<void>('https://portfolio-maxi.herokuapp.com/proyecto/borrar/id/' + id )
  }

  public obtenerPorId(id: number): Observable<Proyecto>{
    return this.http.get<Proyecto>(`https://portfolio-maxi.herokuapp.com/proyecto/${id}`);
  }
}
