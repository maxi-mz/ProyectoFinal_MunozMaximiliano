
package com.portfolio.Maximiliano.Repositorio;

import com.portfolio.Maximiliano.Entidad.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersonaRepositorio extends JpaRepository<Persona,Long> {
    
}
