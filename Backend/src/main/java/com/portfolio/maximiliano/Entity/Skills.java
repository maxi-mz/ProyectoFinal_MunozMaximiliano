package com.portfolio.maximiliano.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class Skills implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idSkill;
    private String tituloSkill;
    private String urlSkill;
    private int porcentajeSkill;

    public Skills() {
    }

    public Skills(Long idSkill, String tituloSkill, String urlSkill, int porcentajeSkill) {
        this.idSkill = idSkill;
        this.tituloSkill = tituloSkill;
        this.urlSkill = urlSkill;
        this.porcentajeSkill = porcentajeSkill;
    }

    public Long getIdSkill() {
        return idSkill;
    }

    public void setIdSkill(Long idSkill) {
        this.idSkill = idSkill;
    }

    public String getTituloSkill() {
        return tituloSkill;
    }

    public void setTituloSkill(String tituloSkill) {
        this.tituloSkill = tituloSkill;
    }

    public String getUrlSkill() {
        return urlSkill;
    }

    public void setUrlSkill(String urlSkill) {
        this.urlSkill = urlSkill;
    }

    public int getPorcentajeSkill() {
        return porcentajeSkill;
    }

    public void setPorcentajeSkill(int porcentajeSkill) {
        this.porcentajeSkill = porcentajeSkill;
    }
}

