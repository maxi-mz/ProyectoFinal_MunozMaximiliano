import { EducacionService } from './../../servicios/educacion.service';
import { Educacion } from './../../Entidades/educacion';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  public educaciones:Educacion[] = [];


  constructor( private educacionService:EducacionService) { }

  ngOnInit(): void {
    this.listarEducacion();
  }

  public listarEducacion():void{
    this.educacionService.listarEducacion().subscribe(lista =>{
      this.educaciones = lista;
    });
  }


  public borrarEducacion(id:number):void{
    console.log(id)
    this.educacionService.borrarEducacion(id).subscribe(data =>{
      this.listarEducacion();
    })
  }

}
