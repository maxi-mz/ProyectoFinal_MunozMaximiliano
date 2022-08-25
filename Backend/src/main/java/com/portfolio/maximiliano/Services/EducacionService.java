package com.portfolio.maximiliano.Services;

import com.portfolio.maximiliano.Entity.Educacion;
import com.portfolio.maximiliano.Exception.EducacionNoEncontradoException;
import com.portfolio.maximiliano.Repository.EducacionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class EducacionService {
    private final EducacionRepo educacionRepo;

    @Autowired
    public EducacionService(EducacionRepo educacionRepo) {
        this.educacionRepo = educacionRepo;
    }

    public Educacion agregarEducacion(Educacion educacion){
        return educacionRepo.save(educacion);
    }

    public List<Educacion> buscarEducaciones(){
        return educacionRepo.findAll();
    }

    public Educacion editarEducacion(Educacion educacion){
        return educacionRepo.save(educacion);
    }

    public void borrarEducacion(Long id){
        educacionRepo.deleteById(id);
    }

    public Educacion buscarEducacionPorId(Long id){
        return educacionRepo.findById(id).orElseThrow(()-> new EducacionNoEncontradoException("About no encontrado"));
    }

}
