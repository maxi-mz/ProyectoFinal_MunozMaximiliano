package com.portfolio.maximiliano.Controller;

import com.portfolio.maximiliano.Entity.Experiencia;
import com.portfolio.maximiliano.Services.ExperienciaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/experiencia")
@CrossOrigin(origins = "http://localhost:4200")
public class ExperienciaController {
    private final ExperienciaService educacionService;

    public ExperienciaController(ExperienciaService educacionService) {
        this.educacionService = educacionService;
    }

    @PostMapping("/agregar")
    public ResponseEntity<Experiencia> agregarExperiencia(@RequestBody Experiencia educacion){
        Experiencia nuevaExperiencia = educacionService.agregarExperiencia(educacion);
        return new ResponseEntity<>(nuevaExperiencia, HttpStatus.CREATED);
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Experiencia>> obtenerExperiencia(){
        List<Experiencia> experiencias = educacionService.buscarExperiencia();
        return new ResponseEntity<>(experiencias, HttpStatus.OK);
    }

    @PutMapping("/actualizar")
    public ResponseEntity<Experiencia> editarExperiencia(@RequestBody Experiencia educacion){
        Experiencia updateExperiencia = educacionService.editarExperiencia(educacion);
        return new ResponseEntity<>(updateExperiencia,HttpStatus.OK);
    }

    @DeleteMapping("/borrar/id/{id}")
    public ResponseEntity<?> borrarExperiencia(@PathVariable("id")Long id){
        educacionService.borrarExperiencia(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
