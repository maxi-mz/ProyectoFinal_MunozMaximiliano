import { EducacionService } from './../../servicios/educacion.service';
import { Educacion } from './../../Entidades/educacion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  public educaciones:Educacion[] = [];

  constructor( private educacionService:EducacionService) { }

  ngOnInit(): void {
    this.getEducacion();
  }

  public getEducacion():void{
    this.educacionService.getEducacion().subscribe(lista =>{
      this.educaciones = lista;
    });
  }
}
