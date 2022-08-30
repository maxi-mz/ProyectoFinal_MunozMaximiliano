import { Route, Router } from '@angular/router';
import { ExperienciaService } from './../../../../servicios/experiencia.service';
import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/Entidades/experiencia';

@Component({
  selector: 'app-agregar-trabajo',
  templateUrl: './agregar-trabajo.component.html',
  styleUrls: ['./agregar-trabajo.component.css']
})
export class AgregarTrabajoComponent implements OnInit {

  titulo!: string;
  descripcion!: string ;
  url!:string ;
  fechaInicio!:number;
  fechaFin!:number;
  actual!:number;

  constructor(private experienciaService: ExperienciaService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const experiencia = new Experiencia(this.titulo,this.descripcion,this.url,this.fechaInicio,this.fechaFin,this.actual);
    this.experienciaService.agregarExperiencia(experiencia).subscribe(
      data =>{
        alert("Experiencia añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

  cancelar(){
    this.actual = 0;
  }

  confirmar(){
    this.actual = 1;
  }
  
}
