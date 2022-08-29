import { Router } from '@angular/router';
import { SkillsService } from './../../../../servicios/skills.service';
import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/Entidades/skill';

@Component({
  selector: 'app-agregar-skill',
  templateUrl: './agregar-skill.component.html',
  styleUrls: ['./agregar-skill.component.css']
})
export class AgregarSkillComponent implements OnInit {

  titulo!: string;
  url!:string ;
  porcentaje!:number;

  constructor(private SkillsService: SkillsService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Skill(this.titulo,this.url,this.porcentaje);
    this.SkillsService.agregarSkill(educacion).subscribe(
      data =>{
        alert("Skill añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}
