package com.portfolio.maximiliano.Controller;

import com.portfolio.maximiliano.Entity.Skill;
import com.portfolio.maximiliano.Services.SkillService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/skill")
@CrossOrigin(origins = "http://localhost:4200")
public class SkillController {

    private final SkillService skillService;

    public SkillController(SkillService skillService) {
        this.skillService = skillService;
    }

    @PostMapping("/agregar")
    public ResponseEntity<Skill> agregarSkills(@RequestBody Skill skill){
        Skill nuevaSkill = skillService.agregarSkill(skill);
        return new ResponseEntity<>(nuevaSkill, HttpStatus.CREATED);
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Skill>> obtenerSkills(){
        List<Skill> skills = skillService.buscarSkill();
        return new ResponseEntity<>(skills, HttpStatus.OK);
    }

    @PutMapping("/actualizar")
    public ResponseEntity<Skill> editarSkills(@RequestBody Skill skill){
        Skill updateSkill = skillService.editarSkill(skill);
        return new ResponseEntity<>(updateSkill,HttpStatus.OK);
    }

    @DeleteMapping("/borrar/id/{id}")
    public ResponseEntity<?> borrarSkills(@PathVariable("id")Long id){
        skillService.borrarSkill(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
