import { AboutService } from './../../servicios/about.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Entidades/usuarios';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public usuario : Usuario | undefined ;
  public editUsuario: Usuario | undefined;
  public nombre: String | undefined;
  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.getUsuario();
  }

  public getUsuario():void{
    this.aboutService.getUsuario().subscribe(dato =>{
      this.usuario = dato
    })

    

  }

}
