package com.portfolio.maximiliano.Repository;

import com.portfolio.maximiliano.Entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkillRepo extends JpaRepository<Skill,Long> {
}
