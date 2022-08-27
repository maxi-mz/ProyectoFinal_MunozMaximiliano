import { EducacionService } from './../../servicios/educacion.service';
import { Educacion } from './../../Entidades/educacion';
import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  public educaciones:Educacion[] = [];
  isLogged = false;

  constructor( private educacionService:EducacionService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.listarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
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
