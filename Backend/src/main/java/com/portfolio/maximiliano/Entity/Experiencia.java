package com.portfolio.maximiliano.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class Experiencia implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idExp;
    private String tituloExp;
    private String descripcionExp;
    private String urlExp;
    private int fechaInicioExp;
    private int fechaFinExp;

    public Experiencia(Long idExp) {
    }

    public Experiencia(Long idExp, String tituloExp, String descripcionExp, String urlExp, int fechaInicioExp, int fechaFinExp) {
        this.idExp = idExp;
        this.tituloExp = tituloExp;
        this.descripcionExp = descripcionExp;
        this.urlExp = urlExp;
        this.fechaInicioExp = fechaInicioExp;
        this.fechaFinExp = fechaFinExp;
    }

    public Long getIdExp() {
        return idExp;
    }

    public void setIdExp(Long idExp) {
        this.idExp = idExp;
    }

    public String getTituloExp() {
        return tituloExp;
    }

    public void setTituloExp(String tituloExp) {
        this.tituloExp = tituloExp;
    }

    public String getDescripcionExp() {
        return descripcionExp;
    }

    public void setDescripcionExp(String descripcionExp) {
        this.descripcionExp = descripcionExp;
    }

    public String getUrlExp() {
        return urlExp;
    }

    public void setUrlExp(String urlExp) {
        this.urlExp = urlExp;
    }

    public int getFechaInicioExp() {
        return fechaInicioExp;
    }

    public void setFechaInicioExp(int fechaInicioExp) {
        this.fechaInicioExp = fechaInicioExp;
    }

    public int getFechaFinExp() {
        return fechaFinExp;
    }

    public void setFechaFinExp(int fechaFinExp) {
        this.fechaFinExp = fechaFinExp;
    }
}
