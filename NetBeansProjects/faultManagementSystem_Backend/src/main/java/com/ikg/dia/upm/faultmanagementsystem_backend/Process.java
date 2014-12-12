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
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
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
@Table(name = "process")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Process.findAll", query = "SELECT p FROM Process p"),
    @NamedQuery(name = "Process.findByIdprocess", query = "SELECT p FROM Process p WHERE p.idprocess = :idprocess"),
    @NamedQuery(name = "Process.findByPort", query = "SELECT p FROM Process p WHERE p.port = :port"),
    @NamedQuery(name = "Process.findByName", query = "SELECT p FROM Process p WHERE p.name = :name"),
    @NamedQuery(name = "Process.findByPid", query = "SELECT p FROM Process p WHERE p.pid = :pid")})
public class Process implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "idprocess")
    private Integer idprocess;
    @Column(name = "port")
    private Integer port;
    @Size(max = 45)
    @Column(name = "Name")
    private String name;
    @Column(name = "pid")
    private Integer pid;
    @JoinTable(name = "topic_publish_process", joinColumns = {
        @JoinColumn(name = "process_idprocess", referencedColumnName = "idprocess")}, inverseJoinColumns = {
        @JoinColumn(name = "topic_idtopic", referencedColumnName = "idtopic")})
    @ManyToMany
    private Collection<Topic> topicCollection;
    @JoinTable(name = "process_subscribe_topic", joinColumns = {
        @JoinColumn(name = "process_idprocess", referencedColumnName = "idprocess")}, inverseJoinColumns = {
        @JoinColumn(name = "topic_idtopic", referencedColumnName = "idtopic")})
    @ManyToMany
    private Collection<Topic> topicCollection1;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "processIdprocess")
    private Collection<ErrorMessage> errorMessageCollection;
    @JoinColumn(name = "processGroup_idprocessGroup", referencedColumnName = "idprocessGroup")
    @ManyToOne(optional = false)
    private ProcessGroup processGroupidprocessGroup;

    public Process() {
    }

    public Process(Integer idprocess) {
        this.idprocess = idprocess;
    }

    public Integer getIdprocess() {
        return idprocess;
    }

    public void setIdprocess(Integer idprocess) {
        this.idprocess = idprocess;
    }

    public Integer getPort() {
        return port;
    }

    public void setPort(Integer port) {
        this.port = port;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getPid() {
        return pid;
    }

    public void setPid(Integer pid) {
        this.pid = pid;
    }

    @XmlTransient
    public Collection<Topic> getTopicCollection() {
        return topicCollection;
    }

    public void setTopicCollection(Collection<Topic> topicCollection) {
        this.topicCollection = topicCollection;
    }

    @XmlTransient
    public Collection<Topic> getTopicCollection1() {
        return topicCollection1;
    }

    public void setTopicCollection1(Collection<Topic> topicCollection1) {
        this.topicCollection1 = topicCollection1;
    }

    @XmlTransient
    public Collection<ErrorMessage> getErrorMessageCollection() {
        return errorMessageCollection;
    }

    public void setErrorMessageCollection(Collection<ErrorMessage> errorMessageCollection) {
        this.errorMessageCollection = errorMessageCollection;
    }

    public ProcessGroup getProcessGroupidprocessGroup() {
        return processGroupidprocessGroup;
    }

    public void setProcessGroupidprocessGroup(ProcessGroup processGroupidprocessGroup) {
        this.processGroupidprocessGroup = processGroupidprocessGroup;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idprocess != null ? idprocess.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Process)) {
            return false;
        }
        Process other = (Process) object;
        if ((this.idprocess == null && other.idprocess != null) || (this.idprocess != null && !this.idprocess.equals(other.idprocess))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.ikg.dia.upm.faultmanagementsystem_backend.Process[ idprocess=" + idprocess + " ]";
    }
    
}
