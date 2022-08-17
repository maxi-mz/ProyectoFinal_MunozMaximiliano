package com.portfolio.Maximiliano.Interface;

import com.portfolio.Maximiliano.Entidad.Persona;
import java.util.List;

public interface IPersonaServicio {
   //traer persona
    public List<Persona> getPersona();
    
    //guardar persona
    public void savePersona(Persona persona);
    
    //eliminar ususario por id
    public void deletePersona(Long id);
    
    //buscar persona por id
            
   public Persona findPersona(Long id);         
}
