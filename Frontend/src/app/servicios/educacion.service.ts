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
    return this.http.get<Educacion[]>('https://portfolio-maxi.herokuapp.com/educacion/listar');
  }

  public actualizarEducacion(educacion:Educacion):Observable<Educacion>{
    return this.http.put<Educacion>('https://portfolio-maxi.herokuapp.com/educacion/actualizar',educacion);
  }

  public agregarEducacion(educacion:Educacion):Observable<Educacion>{
    return this.http.post<Educacion>('https://portfolio-maxi.herokuapp.com/educacion/agregar',educacion)
  }

  public borrarEducacion(id:number):Observable<void>{
    return this.http.delete<void>('https://portfolio-maxi.herokuapp.com/educacion/borrar/id/' + id )
  }

  public obtenerPorId(id: number): Observable<Educacion>{
    return this.http.get<Educacion>(`https://portfolio-maxi.herokuapp.com/educacion/${id}`);
  }
  
  
}
