package com.portfolio.maximiliano.Services;

import com.portfolio.maximiliano.Entity.Proyecto;
import com.portfolio.maximiliano.Exception.ProyectoNoEncontradoException;
import com.portfolio.maximiliano.Repository.ProyectoRepo;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ProyectoService {

    private final ProyectoRepo proyectoRepo;


    public ProyectoService(ProyectoRepo proyectoRepo) {
        this.proyectoRepo = proyectoRepo;
    }

    public Proyecto agregarProyecto(Proyecto proyecto){
        return proyectoRepo.save(proyecto);
    }

    public List<Proyecto> buscarProyecto(){
        return proyectoRepo.findAll();
    }

    public Proyecto editarProyecto(Proyecto proyecto){
        return proyectoRepo.save(proyecto);
    }

    public void borrarProyecto(Long id){
        proyectoRepo.deleteById(id);
    }

    public Proyecto buscarProyectoPorId(Long id){
        return proyectoRepo.findById(id).orElseThrow(()-> new ProyectoNoEncontradoException("Proyecto no encontrado"));
    }
}
