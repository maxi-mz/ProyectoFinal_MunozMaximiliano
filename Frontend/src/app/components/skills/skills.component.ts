import { SkillsService } from './../../servicios/skills.service';
import { Skill } from './../../Entidades/skill';
import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills:Skill[]=[];
  isLogged = false;

  constructor(private skillsService:SkillsService , private tokenService: TokenService) { }

  ngOnInit(): void {
    this.listarSkills();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }

  public listarSkills(){
    this.skillsService.getSkill().subscribe(lista =>{
      this.skills = lista;
      console.log(this.skills[0].porcentaje)
    });
  }

  public borrarSkill(id:number):void{
    console.log(id)
    this.skillsService.borrarSkill(id).subscribe(data =>{
      this.listarSkills();
    })
  }
}
