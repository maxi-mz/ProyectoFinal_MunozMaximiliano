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
    private String tituloEdu;
    private String descripcionEdu;
    private String urlEdu;
    private int fechaInicioEdu;
    private int fechaFinEdu;

    public Educacion(Long idEdu) {
    }

    public Educacion(Long idEdu, String tituloEdu, String descripcionEdu, String urlEdu, int fechaInicioEdu, int fechaFinEdu) {
        this.idEdu = idEdu;
        this.tituloEdu = tituloEdu;
        this.descripcionEdu = descripcionEdu;
        this.urlEdu = urlEdu;
        this.fechaInicioEdu = fechaInicioEdu;
        this.fechaFinEdu = fechaFinEdu;
    }

    public Long getIdEdu() {
        return idEdu;
    }

    public void setIdEdu(Long idEdu) {
        this.idEdu = idEdu;
    }

    public String getTituloEdu() {
        return tituloEdu;
    }

    public void setTituloEdu(String tituloEdu) {
        this.tituloEdu = tituloEdu;
    }

    public String getDescripcionEdu() {
        return descripcionEdu;
    }

    public void setDescripcionEdu(String descripcionEdu) {
        this.descripcionEdu = descripcionEdu;
    }

    public String getUrlEdu() {
        return urlEdu;
    }

    public void setUrlEdu(String urlEdu) {
        this.urlEdu = urlEdu;
    }

    public int getFechaInicioEdu() {
        return fechaInicioEdu;
    }

    public void setFechaInicioEdu(int fechaInicioEdu) {
        this.fechaInicioEdu = fechaInicioEdu;
    }

    public int getFechaFinEdu() {
        return fechaFinEdu;
    }

    public void setFechaFinEdu(int fechaFinEdu) {
        this.fechaFinEdu = fechaFinEdu;
    }
}
