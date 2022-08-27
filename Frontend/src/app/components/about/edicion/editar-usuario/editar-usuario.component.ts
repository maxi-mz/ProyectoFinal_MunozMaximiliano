import { Router } from '@angular/router';
import { AboutService } from './../../../../servicios/about.service';
import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/Entidades/About';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  about!: About;
  
  constructor(
    private aboutService :AboutService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe(
      data =>{
        this.about = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    this.aboutService.updateAbout(this.about).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el about me");
        this.router.navigate(['']);
      }
    )
  }

}
