package com.prova1.entities;

import jakarta.xml.bind.annotation.XmlRootElement;

@XmlRootElement

public class Partidos {
    private String nomePartido;
    private int numPartido;
    private String votosPartido;

    public Partidos(String nomePartido, int numPartido, String votosPartido) {
        this.nomePartido = nomePartido;
        this.numPartido = numPartido;
        this.votosPartido = votosPartido;
    }

    public String getNomePartido() {
        return nomePartido;
    }

    public void setNomePartido(String nomePartido) {
        this.nomePartido = nomePartido;
    }

    public int getNumPartido() {
        return numPartido;
    }

    public void setNumPartido(int numPartido) {
        this.numPartido = numPartido;
    }

    public String getVotosPartido() {
        return votosPartido;
    }

    public void setVotosPartido(String votosPartido) {
        this.votosPartido = votosPartido;
    }

    
}
