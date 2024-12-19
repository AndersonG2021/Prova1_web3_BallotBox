package com.prova1.entities;

import jakarta.xml.bind.annotation.XmlRootElement;

@XmlRootElement

public class Candidato {
    String nomeCandidato;
    int numCandidato;
    int votosCandidato;
    
    public Candidato(String nomeCandidato, int numCandidato, int votosCandidato) {
        this.nomeCandidato = nomeCandidato;
        this.numCandidato = numCandidato;
        this.votosCandidato = votosCandidato;
    }

    public String getNomeCandidato() {
        return nomeCandidato;
    }

    public void setNomeCandidato(String nomeCandidato) {
        this.nomeCandidato = nomeCandidato;
    }

    public int getNumCandidato() {
        return numCandidato;
    }

    public void setNumCandidato(int numCandidato) {
        this.numCandidato = numCandidato;
    }

    public int getVotosCandidato() {
        return votosCandidato;
    }

    public void setVotosCandidato(int votosCandidato) {
        this.votosCandidato = votosCandidato;
    }

    
}
