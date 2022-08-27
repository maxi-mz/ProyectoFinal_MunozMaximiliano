package com.portfolio.maximiliano.Security.Repository;

import com.portfolio.maximiliano.Security.Entity.Rol;
import com.portfolio.maximiliano.Security.Enums.RolNombre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RolRepo extends JpaRepository<Rol,Integer> {
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
}
