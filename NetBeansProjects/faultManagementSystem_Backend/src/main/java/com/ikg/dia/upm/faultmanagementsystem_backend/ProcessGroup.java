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
@Table(name = "processGroup")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "ProcessGroup.findAll", query = "SELECT p FROM ProcessGroup p"),
    @NamedQuery(name = "ProcessGroup.findByIdprocessGroup", query = "SELECT p FROM ProcessGroup p WHERE p.idprocessGroup = :idprocessGroup"),
    @NamedQuery(name = "ProcessGroup.findByName", query = "SELECT p FROM ProcessGroup p WHERE p.name = :name")})
public class ProcessGroup implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "idprocessGroup")
    private Integer idprocessGroup;
    @Size(max = 45)
    @Column(name = "Name")
    private String name;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "processGroupidprocessGroup")
    private Collection<Process> processCollection;

    public ProcessGroup() {
    }

    public ProcessGroup(Integer idprocessGroup) {
        this.idprocessGroup = idprocessGroup;
    }

    public Integer getIdprocessGroup() {
        return idprocessGroup;
    }

    public void setIdprocessGroup(Integer idprocessGroup) {
        this.idprocessGroup = idprocessGroup;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @XmlTransient
    public Collection<Process> getProcessCollection() {
        return processCollection;
    }

    public void setProcessCollection(Collection<Process> processCollection) {
        this.processCollection = processCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idprocessGroup != null ? idprocessGroup.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof ProcessGroup)) {
            return false;
        }
        ProcessGroup other = (ProcessGroup) object;
        if ((this.idprocessGroup == null && other.idprocessGroup != null) || (this.idprocessGroup != null && !this.idprocessGroup.equals(other.idprocessGroup))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.ikg.dia.upm.faultmanagementsystem_backend.ProcessGroup[ idprocessGroup=" + idprocessGroup + " ]";
    }
    
}
