import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../Entidades/experiencia';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http:HttpClient) { }

  public listarExperiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>('http://localhost:8080/experiencia/listar');
  }

  public actualizarExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    return this.http.put<Experiencia>('http://localhost:8080/experiencia/actualizar',experiencia);
  }

  public agregarExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>('http://localhost:8080/experiencia/agregar',experiencia)
  }

  public borrarExperiencia(id:number):Observable<void>{
    return this.http.delete<void>('http://localhost:8080/experiencia/borrar/id/' + id )
  }

  public obtenerPorId(id: number): Observable<Experiencia>{
    return this.http.get<Experiencia>(`http://localhost:8080/experiencia/${id}`);
  }
}
