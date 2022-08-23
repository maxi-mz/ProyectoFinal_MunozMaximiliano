import { Route, Router } from '@angular/router';
import { EducacionService } from './../../../../servicios/educacion.service';
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/Entidades/educacion';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent implements OnInit {

  titulo!: string;
  descripcion!: string ;
  url!:string ;
  fechaInicio!:number;
  fechaFin!:number;

  constructor(private educacionService: EducacionService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Educacion(this.titulo,this.descripcion,this.url,this.fechaInicio,this.fechaFin);
    this.educacionService.agregarEducacion(educacion).subscribe(
      data =>{
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}
