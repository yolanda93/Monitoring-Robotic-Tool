/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.ikg.dia.upm.faultmanagementsystem_backend;

import java.io.Serializable;
import java.util.Collection;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author yolanda
 */
@Entity
@Table(name = "topic")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Topic.findAll", query = "SELECT t FROM Topic t"),
    @NamedQuery(name = "Topic.findByIdtopic", query = "SELECT t FROM Topic t WHERE t.idtopic = :idtopic"),
    @NamedQuery(name = "Topic.findByName", query = "SELECT t FROM Topic t WHERE t.name = :name"),
    @NamedQuery(name = "Topic.findByType", query = "SELECT t FROM Topic t WHERE t.type = :type"),
    @NamedQuery(name = "Topic.findByBandwidth", query = "SELECT t FROM Topic t WHERE t.bandwidth = :bandwidth"),
    @NamedQuery(name = "Topic.findByRate", query = "SELECT t FROM Topic t WHERE t.rate = :rate")})
public class Topic implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "idtopic")
    private Integer idtopic;
    @Size(max = 45)
    @Column(name = "Name")
    private String name;
    @Size(max = 45)
    @Column(name = "type")
    private String type;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Column(name = "bandwidth")
    private Double bandwidth;
    @Column(name = "rate")
    private Double rate;
    @ManyToMany(mappedBy = "topicCollection")
    private Collection<Process> processCollection;
    @ManyToMany(mappedBy = "topicCollection1")
    private Collection<Process> processCollection1;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "topicIdtopic")
    private Collection<Message> messageCollection;

    public Topic() {
    }

    public Topic(Integer idtopic) {
        this.idtopic = idtopic;
    }

    public Integer getIdtopic() {
        return idtopic;
    }

    public void setIdtopic(Integer idtopic) {
        this.idtopic = idtopic;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Double getBandwidth() {
        return bandwidth;
    }

    public void setBandwidth(Double bandwidth) {
        this.bandwidth = bandwidth;
    }

    public Double getRate() {
        return rate;
    }

    public void setRate(Double rate) {
        this.rate = rate;
    }

    @XmlTransient
    public Collection<Process> getProcessCollection() {
        return processCollection;
    }

    public void setProcessCollection(Collection<Process> processCollection) {
        this.processCollection = processCollection;
    }

    @XmlTransient
    public Collection<Process> getProcessCollection1() {
        return processCollection1;
    }

    public void setProcessCollection1(Collection<Process> processCollection1) {
        this.processCollection1 = processCollection1;
    }

    @XmlTransient
    public Collection<Message> getMessageCollection() {
        return messageCollection;
    }

    public void setMessageCollection(Collection<Message> messageCollection) {
        this.messageCollection = messageCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idtopic != null ? idtopic.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Topic)) {
            return false;
        }
        Topic other = (Topic) object;
        if ((this.idtopic == null && other.idtopic != null) || (this.idtopic != null && !this.idtopic.equals(other.idtopic))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.ikg.dia.upm.faultmanagementsystem_backend.Topic[ idtopic=" + idtopic + " ]";
    }
    
}
