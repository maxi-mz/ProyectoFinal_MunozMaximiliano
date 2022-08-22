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
    return this.http.get<Skill[]>('http://localhost:8080/skill/listar');
  }

  public updateSkill(skill:Skill):Observable<Skill>{
    return this.http.put<Skill>('http://localhost:8080/skill/actualizar',skill);
  }

  public agregarSkill(skill:Skill):Observable<Skill>{
    return this.http.post<Skill>('http://localhost:8080/skill/agregar',skill)
  }

  public borrarSkill(id:number):Observable<void>{
    return this.http.delete<void>('http://localhost:8080/skill/borrar/id/' + id )
  }
}
