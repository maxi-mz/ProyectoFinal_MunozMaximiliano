import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { Proyecto } from './../../../../Entidades/Proyecto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  proyecto!: Proyecto;
  
  constructor(
    private proyectoService:ProyectoService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.obtenerPorId(id).subscribe(
      data =>{
        this.proyecto = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    this.proyectoService.actualizarProyecto(this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la proyecto");
        this.router.navigate(['']);
      }
    )
  }

}
