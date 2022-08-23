import { ActivatedRoute, Router } from '@angular/router';
import { SkillsService } from './../../../../servicios/skills.service';
import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/Entidades/skill';

@Component({
  selector: 'app-editar-skill',
  templateUrl: './editar-skill.component.html',
  styleUrls: ['./editar-skill.component.css']
})
export class EditarSkillComponent implements OnInit {

  skill!: Skill;
  
  constructor(
    private skillService:SkillsService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.obtenerPorId(id).subscribe(
      data =>{
        this.skill = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    this.skillService.actualizarSkill (this.skill).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la skill");
        this.router.navigate(['']);
      }
    )
  }
}
