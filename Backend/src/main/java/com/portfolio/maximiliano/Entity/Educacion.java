package com.portfolio.maximiliano.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class Educacion implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idEdu;
    private String titulo;
    private String descripcion;
    private String url;
    private int fechaInicio;
    private int fechaFin;

    public Educacion() {
    }

    public Educacion(Long idEdu, String titulo, String descripcion, String url, int fechaInicio, int fechaFin) {
        this.idEdu = idEdu;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.url = url;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }



    public Long getId() {
        return idEdu;
    }

    public void setId(Long idEdu) {
        this.idEdu = idEdu;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public int getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(int fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public int getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(int fechaFin) {
        this.fechaFin = fechaFin;
    }
}
