package com.portfolio.maximiliano.Services;

import com.portfolio.maximiliano.Entity.Skill;
import com.portfolio.maximiliano.Exception.SkillNoEncontradoException;
import com.portfolio.maximiliano.Repository.SkillRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class SkillService {
    private final SkillRepo skillRepo;

    @Autowired
    public SkillService(SkillRepo skillRepo) {
        this.skillRepo = skillRepo;
    }

    public Skill agregarSkill(Skill skill){
        return skillRepo.save(skill);
    }

    public List<Skill> buscarSkill(){
        return skillRepo.findAll();
    }

    public Skill editarSkill(Skill skill){
        return skillRepo.save(skill);
    }

    public void borrarSkill(Long id){
        skillRepo.deleteById(id);
    }

    public Skill buscarSkillsPorId(Long id){
        return skillRepo.findById(id).orElseThrow(()-> new SkillNoEncontradoException("Skill no encontrado"));
    }
}
