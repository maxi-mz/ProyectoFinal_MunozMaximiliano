package com.portfolio.maximiliano.Security.Service;

import com.portfolio.maximiliano.Security.Entity.Rol;
import com.portfolio.maximiliano.Security.Enums.RolNombre;
import com.portfolio.maximiliano.Security.Repository.RolRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class RolService {
    @Autowired
    RolRepo rolRepoolRepo;

    public Optional<Rol> getByRolNombre(RolNombre rolNombre){
        return rolRepoolRepo.findByRolNombre(rolNombre);
    }

    public void save(Rol rol){
        rolRepoolRepo.save(rol);
    }
}
