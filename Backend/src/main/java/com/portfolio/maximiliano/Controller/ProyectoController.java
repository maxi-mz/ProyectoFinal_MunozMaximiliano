package com.portfolio.maximiliano.Controller;

import com.portfolio.maximiliano.Entity.Proyecto;
import com.portfolio.maximiliano.Services.ProyectoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/proyecto")
@CrossOrigin(origins = "http://localhost:4200")
public class ProyectoController {

    private final ProyectoService proyectoService;

    public ProyectoController(ProyectoService proyectoService) {
        this.proyectoService = proyectoService;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/agregar")
    public ResponseEntity<Proyecto> agregarProyecto(@RequestBody Proyecto proyecto){
        Proyecto nuevaProyecto = proyectoService.agregarProyecto(proyecto);
        return new ResponseEntity<>(nuevaProyecto, HttpStatus.CREATED);
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Proyecto>> obtenerProyecto(){
        List<Proyecto> proyectoes = proyectoService.buscarProyecto();
        return new ResponseEntity<>(proyectoes, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/actualizar")
    public ResponseEntity<Proyecto> editarProyecto(@RequestBody Proyecto proyecto){
        Proyecto updateProyecto = proyectoService.editarProyecto(proyecto);
        return new ResponseEntity<>(updateProyecto,HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/borrar/id/{id}")
    public ResponseEntity<?> borrarProyecto(@PathVariable("id")Long id){
        proyectoService.borrarProyecto(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Proyecto> getById(@PathVariable("id")long id){
        Proyecto proyecto = proyectoService.buscarProyectoPorId(id);
        return new ResponseEntity(proyecto, HttpStatus.OK);
    }
}
