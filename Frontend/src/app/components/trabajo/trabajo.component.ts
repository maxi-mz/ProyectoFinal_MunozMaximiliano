import { ExperienciaService } from './../../servicios/experiencia.service';
import { Experiencia } from './../../Entidades/experiencia';
import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.css']
})
export class TrabajoComponent implements OnInit {

  public experiencias:Experiencia[] =[];
  isLogged = false;

  constructor(private experienciaService:ExperienciaService , private tokenService: TokenService) { }

  ngOnInit(): void {
    this.listarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }

  public listarExperiencia(){
    this.experienciaService.listarExperiencia().subscribe(lista =>{
      this.experiencias = lista;
    });
  }

  public borrarExperiencia(id:number):void{
    console.log(id)
    this.experienciaService.borrarExperiencia(id).subscribe(data =>{
      this.listarExperiencia();
    })
  }

}
