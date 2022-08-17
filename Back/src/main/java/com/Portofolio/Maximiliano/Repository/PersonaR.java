package com.Portofolio.Maximiliano.Repository;

import com.portfolio.Maximiliano.Entidad.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonaR extends JpaRepository<Persona,Long> {

    
}
