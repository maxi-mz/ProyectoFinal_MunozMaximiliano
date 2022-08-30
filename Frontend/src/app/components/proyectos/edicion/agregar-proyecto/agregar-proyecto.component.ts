import { ProyectoService } from './../../../../servicios/proyecto.service';
import { Proyecto } from './../../../../Entidades/Proyecto';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit {

  
  titulo!:string;
  descripcion!:string;
  fecha!:number;
  foto!:string;
  url!:string;

  constructor(private proyectoService:ProyectoService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyecto = new Proyecto(this.titulo,this.descripcion,this.fecha,this.foto,this.url);
    this.proyectoService.agregarProyecto(proyecto).subscribe(
      data =>{
        alert("Proyecto añadido correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
