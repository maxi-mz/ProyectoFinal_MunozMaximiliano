
package com.portfolio.Maximiliano.Servicio;

import com.portfolio.Maximiliano.Entidad.Persona;
import com.portfolio.Maximiliano.Interface.IPersonaServicio;
import com.portfolio.Maximiliano.Repositorio.IPersonaRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpPersonaServicio implements IPersonaServicio{

    @Autowired IPersonaRepositorio ipersonaRepositorio;
    
    
    
    @Override
    public List<Persona> getPersona() {
        List<Persona> persona = ipersonaRepositorio.findAll();
        return persona;
    }

    @Override
    public void savePersona(Persona persona) {
        ipersonaRepositorio.save(persona);
    }

    @Override
    public void deletePersona(Long id) {
        ipersonaRepositorio.deleteById(id);
    }

    @Override
    public Persona findPersona(Long id) {
        Persona persona = ipersonaRepositorio.findById(id).orElse(null);
        return persona;
    }
    
}
