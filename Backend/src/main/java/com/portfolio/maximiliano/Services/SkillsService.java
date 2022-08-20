package com.portfolio.maximiliano.Services;

import com.portfolio.maximiliano.Entity.Skills;
import com.portfolio.maximiliano.Exception.SkillsNoEncontradoException;
import com.portfolio.maximiliano.Repository.SkillsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class SkillsService {
    private final SkillsRepo skillsRepo;

    @Autowired
    public SkillsService(SkillsRepo skillsRepo) {
        this.skillsRepo = skillsRepo;
    }

    public Skills agregarSkills(Skills skills){
        return skillsRepo.save(skills);
    }

    public List<Skills> buscarSkills(){
        return skillsRepo.findAll();
    }

    public Skills editarSkills(Skills skills){
        return skillsRepo.save(skills);
    }

    public void borrarSkills(Long id){
        skillsRepo.deleteById(id);
    }

    public Skills buscarSkillsPorId(Long id){
        return skillsRepo.findById(id).orElseThrow(()-> new SkillsNoEncontradoException("Skills no encontrado"));
    }
}
