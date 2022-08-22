package com.portfolio.maximiliano.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class Skill implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idSkill;
    private String titulo;
    private String url;
    private int porcentaje;

    public Skill() {
    }

    public Skill(Long idSkill, String titulo, String url, int porcentaje) {
        this.idSkill = idSkill;
        this.titulo = titulo;
        this.url = url;
        this.porcentaje = porcentaje;
    }

    public Long getId() {
        return idSkill;
    }

    public void setId(Long idSkill) {
        this.idSkill = idSkill;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public int getPorcentaje() {
        return porcentaje;
    }

    public void setPorcentaje(int porcentaje) {
        this.porcentaje = porcentaje;
    }
}

