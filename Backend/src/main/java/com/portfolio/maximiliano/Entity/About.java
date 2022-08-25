package com.portfolio.maximiliano.Entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.*;

@Entity
public class About implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false,updatable = false)
    private Long idAbout;
    private String nombre;
    private String apellido;
    private String titulo;
    private String descripcion;
    private String url;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "idEdu")
    private List<Educacion> educacionList;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "idExp")
    private List<Experiencia> experienciaList;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "idSkill")
    private List<Skill> skillList;

    public About() {
    }

    public About(Long idAbout, String nombre, String apellido, String titulo, String descripcion, String url) {
        this.idAbout = idAbout;
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.url = url;
    }

    public Long getId() {
        return idAbout;
    }

    public void setId(Long idAbout) {
        this.idAbout = idAbout;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
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
}
