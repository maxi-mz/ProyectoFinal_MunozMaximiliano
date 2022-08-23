package com.portfolio.maximiliano.Controller;

import com.portfolio.maximiliano.Entity.Educacion;
import com.portfolio.maximiliano.Entity.Educacion;
import com.portfolio.maximiliano.Services.EducacionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/educacion")
@CrossOrigin(origins = "http://localhost:4200")
public class EducacionController {

    private final EducacionService educacionService;

    public EducacionController(EducacionService educacionService) {
        this.educacionService = educacionService;
    }

    @PostMapping("/agregar")
    public ResponseEntity<Educacion> agregarEducacion(@RequestBody Educacion educacion){
        Educacion nuevaEducacion = educacionService.agregarEducacion(educacion);
        return new ResponseEntity<>(nuevaEducacion,HttpStatus.CREATED);
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Educacion>> obtenerEducacion(){
        List<Educacion> educaciones = educacionService.buscarEducaciones();
        return new ResponseEntity<>(educaciones, HttpStatus.OK);
    }

    @PutMapping("/actualizar")
    public ResponseEntity<Educacion> editarEducacion(@RequestBody Educacion educacion){
        Educacion updateEducacion = educacionService.editarEducacion(educacion);
        return new ResponseEntity<>(updateEducacion,HttpStatus.OK);
    }

    @DeleteMapping("/borrar/id/{id}")
    public ResponseEntity<?> borrarEducacion(@PathVariable("id")Long id){
        educacionService.borrarEducacion(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Educacion> getById(@PathVariable("id")long id){
        Educacion educacion = educacionService.buscarEducacionPorId(id);
        return new ResponseEntity(educacion, HttpStatus.OK);
    }

}
