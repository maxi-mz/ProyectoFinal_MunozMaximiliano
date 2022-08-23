import { Router } from '@angular/router';
import { AboutService } from './../../../../servicios/about.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Entidades/usuario';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuario!: Usuario;
  
  constructor(
    private aboutService :AboutService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.aboutService.getUsuario().subscribe(
      data =>{
        this.usuario = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    this.aboutService.updateUsuario(this.usuario).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el usuario");
        this.router.navigate(['']);
      }
    )
  }

}
