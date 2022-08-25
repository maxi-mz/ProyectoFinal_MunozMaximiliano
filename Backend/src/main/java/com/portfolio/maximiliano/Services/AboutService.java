package com.portfolio.maximiliano.Services;

import com.portfolio.maximiliano.Entity.About;
import com.portfolio.maximiliano.Exception.AboutNoEncontradoException;
import com.portfolio.maximiliano.Repository.AboutRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class AboutService {

    private final AboutRepo aboutRepo;

    @Autowired
    public AboutService(AboutRepo aboutRepo) {
        this.aboutRepo = aboutRepo;
    }

    public About agregarAbout(About about){
        return aboutRepo.save(about);
    }

    public List<About> buscarAbout(){
        return aboutRepo.findAll();
    }

    public About editarAbout(About about){
        return aboutRepo.save(about);
    }

    public void borrarAbout(Long id){
        aboutRepo.deleteById(id);
    }

    public About buscarAboutPorId(Long id){
        return aboutRepo.findById(id).orElseThrow(()-> new AboutNoEncontradoException("About no encontrado"));
    }


}
