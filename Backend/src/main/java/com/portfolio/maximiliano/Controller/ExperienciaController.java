package com.portfolio.maximiliano.Controller;

import com.portfolio.maximiliano.Entity.Educacion;
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
    private final ExperienciaService experienciaService;

    public ExperienciaController(ExperienciaService experienciaService) {
        this.experienciaService = experienciaService;
    }

    @PostMapping("/agregar")
    public ResponseEntity<Experiencia> agregarExperiencia(@RequestBody Experiencia experiencia){
        Experiencia nuevaExperiencia = experienciaService.agregarExperiencia(experiencia);
        return new ResponseEntity<>(nuevaExperiencia, HttpStatus.CREATED);
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Experiencia>> obtenerExperiencia(){
        List<Experiencia> experiencias = experienciaService.buscarExperiencia();
        return new ResponseEntity<>(experiencias, HttpStatus.OK);
    }

    @PutMapping("/actualizar")
    public ResponseEntity<Experiencia> editarExperiencia(@RequestBody Experiencia experiencia){
        Experiencia updateExperiencia = experienciaService.editarExperiencia(experiencia);
        return new ResponseEntity<>(updateExperiencia,HttpStatus.OK);
    }

    @DeleteMapping("/borrar/id/{id}")
    public ResponseEntity<?> borrarExperiencia(@PathVariable("id")Long id){
        experienciaService.borrarExperiencia(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Experiencia> getById(@PathVariable("id")long id){
        Experiencia experiencia = experienciaService.buscarExperienciaPorId(id);
        return new ResponseEntity(experiencia, HttpStatus.OK);
    }
}
