import { SkillsService } from './../../servicios/skills.service';
import { Skill } from './../../Entidades/skill';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills:Skill[]=[];

  constructor(private SkillsService:SkillsService) { }

  ngOnInit(): void {
    this.getSkills();
  }

  public getSkills(){
    this.SkillsService.getSkill().subscribe(lista =>{
      this.skills = lista;
      console.log(this.skills[0].porcentaje)
    });
  }
}
