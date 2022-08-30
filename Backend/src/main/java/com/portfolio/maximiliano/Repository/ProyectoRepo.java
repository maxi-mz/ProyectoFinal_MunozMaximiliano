package com.portfolio.maximiliano.Repository;

import com.portfolio.maximiliano.Entity.Proyecto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProyectoRepo extends JpaRepository<Proyecto,Long> {
}
