import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { About } from '../Entidades/About';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor( private http:HttpClient) { }

  public getAbout():Observable<About>{
    return this.http.get<About>('https://portfolio-maxi.herokuapp.com/about/1');
  }

  public updateAbout(About:About):Observable<About>{
    return this.http.put<About>('https://portfolio-maxi.herokuapp.com/about/actualizar',About);
  }
}
