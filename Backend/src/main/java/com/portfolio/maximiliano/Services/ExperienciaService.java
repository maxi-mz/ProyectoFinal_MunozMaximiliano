package com.portfolio.maximiliano.Services;

import com.portfolio.maximiliano.Entity.Experiencia;
import com.portfolio.maximiliano.Exception.ExperienciaNoEncontradoException;
import com.portfolio.maximiliano.Repository.ExperienciaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ExperienciaService {
    private final ExperienciaRepo experienciaRepo;

    @Autowired
    public ExperienciaService(ExperienciaRepo experienciaRepo) {
        this.experienciaRepo = experienciaRepo;
    }

    public Experiencia agregarExperiencia(Experiencia experiencia){
        return experienciaRepo.save(experiencia);
    }

    public List<Experiencia> buscarExperiencia(){
        return experienciaRepo.findAll();
    }

    public Experiencia editarExperiencia(Experiencia experiencia){
        return experienciaRepo.save(experiencia);
    }

    public void borrarExperiencia(Long id){
        experienciaRepo.deleteById(id);
    }

    public Experiencia buscarExperienciaPorId(Long id){
        return experienciaRepo.findById(id).orElseThrow(()-> new ExperienciaNoEncontradoException("Experiencia no encontrado"));
    }
}
