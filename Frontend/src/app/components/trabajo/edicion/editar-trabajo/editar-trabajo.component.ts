import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaService } from './../../../../servicios/experiencia.service';
import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/Entidades/experiencia';

@Component({
  selector: 'app-editar-trabajo',
  templateUrl: './editar-trabajo.component.html',
  styleUrls: ['./editar-trabajo.component.css']
})
export class EditarTrabajoComponent implements OnInit {

  experiencia!: Experiencia;
  
  constructor(
    private experienciaService:ExperienciaService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.obtenerPorId(id).subscribe(
      data =>{
        this.experiencia = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    this.experienciaService.actualizarExperiencia(this.experiencia).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }

  cancelar(){
    this.experiencia.actual = 0;
  }

  confirmar(){
    this.experiencia.actual = 1;
  }

}
