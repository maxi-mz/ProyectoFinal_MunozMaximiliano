import { ExperienciaService } from './../../servicios/experiencia.service';
import { Experiencia } from './../../Entidades/experiencia';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.css']
})
export class TrabajoComponent implements OnInit {

  public experiencias:Experiencia[] =[];

  constructor(private experienciaService:ExperienciaService) { }

  ngOnInit(): void {
    this.getExperiencia();
  }

  public getExperiencia(){
    this.experienciaService.getExperiencia().subscribe(lista =>{
      this.experiencias = lista;
    });
  }

}
