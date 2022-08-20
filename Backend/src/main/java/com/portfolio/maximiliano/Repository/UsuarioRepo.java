package com.portfolio.maximiliano.Repository;

import com.portfolio.maximiliano.Entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepo extends JpaRepository<Usuario,Long> {
}
