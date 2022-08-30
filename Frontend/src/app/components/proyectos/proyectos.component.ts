import { Proyecto } from './../../Entidades/Proyecto';
import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  public proyectos:Proyecto[] = [];
  isLogged = false;

  constructor( private proyectoService:ProyectoService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.listarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }

  public listarProyecto():void{
    this.proyectoService.listarProyecto().subscribe(lista =>{
      this.proyectos = lista;
    });
  }


  public borrarProyecto(id:number):void{
    console.log(id)
    this.proyectoService.borrarProyecto(id).subscribe(data =>{
      this.listarProyecto();
    })
  }

}
