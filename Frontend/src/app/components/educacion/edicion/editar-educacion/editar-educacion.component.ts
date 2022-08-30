import { ActivatedRoute, Router } from '@angular/router';
import { EducacionService } from './../../../../servicios/educacion.service';
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/Entidades/educacion';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  educacion!: Educacion;
  
  constructor(
    private educacionService:EducacionService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.obtenerPorId(id).subscribe(
      data =>{
        this.educacion = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    this.educacionService.actualizarEducacion(this.educacion).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }

  curso(){
    this.educacion.curso = 1;
  }

  educacion_formal(){
    this.educacion.curso = 0;
  }

  cancelar(){
    this.educacion.actual = 0;
  }

  confirmar(){
    this.educacion.actual = 1;
  }
}
