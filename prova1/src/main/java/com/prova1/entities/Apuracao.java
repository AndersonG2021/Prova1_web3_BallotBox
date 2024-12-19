package com.prova1.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.xml.bind.annotation.XmlRootElement;

@XmlRootElement

public class Apuracao {
    private List<Candidato> candidatos = new ArrayList<>();
    private List<Partidos> partidos = new ArrayList<>();
    
    
    public Apuracao(List<Candidato> candidatos, List<Partidos> partidos) {
        this.candidatos = candidatos;
        this.partidos = partidos;
    }


    public List<Candidato> getCandidatos() {
        return candidatos;
    }


    public void setCandidatos(List<Candidato> candidatos) {
        this.candidatos = candidatos;
    }


    public List<Partidos> getPartidos() {
        return partidos;
    }


    public void setPartidos(List<Partidos> partidos) {
        this.partidos = partidos;
    }

    
    
}
