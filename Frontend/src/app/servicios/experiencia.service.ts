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
    return this.http.get<Experiencia[]>('https://portfolio-maxi.herokuapp.com/experiencia/listar');
  }

  public actualizarExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    return this.http.put<Experiencia>('https://portfolio-maxi.herokuapp.com/experiencia/actualizar',experiencia);
  }

  public agregarExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>('https://portfolio-maxi.herokuapp.com/experiencia/agregar',experiencia)
  }

  public borrarExperiencia(id:number):Observable<void>{
    return this.http.delete<void>('https://portfolio-maxi.herokuapp.com/experiencia/borrar/id/' + id )
  }

  public obtenerPorId(id: number): Observable<Experiencia>{
    return this.http.get<Experiencia>(`https://portfolio-maxi.herokuapp.com/experiencia/${id}`);
  }
}
