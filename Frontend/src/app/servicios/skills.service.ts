import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../Entidades/skill';


@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http:HttpClient) { }

  public getSkill():Observable<Skill[]>{
    return this.http.get<Skill[]>('https://portfolio-maxi.herokuapp.com/skill/listar');
  }

  public actualizarSkill(skill:Skill):Observable<Skill>{
    return this.http.put<Skill>('https://portfolio-maxi.herokuapp.com/skill/actualizar',skill);
  }

  public agregarSkill(skill:Skill):Observable<Skill>{
    return this.http.post<Skill>('https://portfolio-maxi.herokuapp.com/skill/agregar',skill)
  }

  public borrarSkill(id:number):Observable<void>{
    return this.http.delete<void>('https://portfolio-maxi.herokuapp.com/skill/borrar/id/' + id )
  }

  public obtenerPorId(id: number): Observable<Skill>{
    return this.http.get<Skill>(`https://portfolio-maxi.herokuapp.com/skill/${id}`);
  }
}
