package com.portfolio.maximiliano.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class Proyecto implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idPr;

    private String titulo;

    private String descripcion;

    private int fecha;

    private String foto;

    private String url;

    public Proyecto() {
    }

    public Proyecto(Long id, String titulo, String descripcion, int fecha, String foto, String url) {
        this.idPr = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.foto = foto;
        this.url = url;
    }

    public Long getId() {
        return idPr;
    }

    public void setId(Long idPr) {
        this.idPr = idPr;
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

    public int getFecha() {
        return fecha;
    }

    public void setFecha(int fecha) {
        this.fecha = fecha;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
