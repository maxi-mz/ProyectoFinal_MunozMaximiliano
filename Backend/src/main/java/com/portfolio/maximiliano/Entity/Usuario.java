package com.portfolio.maximiliano.Entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.*;

@Entity
public class Usuario implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false,updatable = false)
    private Long IdUsuario;

    private String NombreUsuario;
    private String apellidoUsuario;
    private String tituloUsuario;
    private String imagenUrlUsuario;
    private String descripcionUsuario;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "idEdu")
    private List<Educacion> educacionList;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "idExp")
    private List<Experiencia> experienciaList;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "idSkill")
    private List<Skills> skillsList ;

    public Usuario() {
    }

    public Usuario(Long idUsuario, String nombreUsuario, String apellidoUsuario, String tituloUsuario, String imagenUrlUsuario, String descripcionUsuario) {
        IdUsuario = idUsuario;
        NombreUsuario = nombreUsuario;
        this.apellidoUsuario = apellidoUsuario;
        this.tituloUsuario = tituloUsuario;
        this.imagenUrlUsuario = imagenUrlUsuario;
        this.descripcionUsuario = descripcionUsuario;
    }

    public Long getIdUsuario() {
        return IdUsuario;
    }

    public void setIdUsuario(Long idUsuario) {
        IdUsuario = idUsuario;
    }

    public String getNombreUsuario() {
        return NombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        NombreUsuario = nombreUsuario;
    }

    public String getApellidoUsuario() {
        return apellidoUsuario;
    }

    public void setApellidoUsuario(String apellidoUsuario) {
        this.apellidoUsuario = apellidoUsuario;
    }

    public String getTituloUsuario() {
        return tituloUsuario;
    }

    public void setTituloUsuario(String tituloUsuario) {
        this.tituloUsuario = tituloUsuario;
    }

    public String getImagenUrlUsuario() {
        return imagenUrlUsuario;
    }

    public void setImagenUrlUsuario(String imagenUrlUsuario) {
        this.imagenUrlUsuario = imagenUrlUsuario;
    }

    public String getDescripcionUsuario() {
        return descripcionUsuario;
    }

    public void setDescripcionUsuario(String descripcionUsuario) {
        this.descripcionUsuario = descripcionUsuario;
    }
}
