/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.ikg.dia.upm.faultmanagementsystem_backend;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author yolanda
 */
@Entity
@Table(name = "message")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Message.findAll", query = "SELECT m FROM Message m"),
    @NamedQuery(name = "Message.findByIdmessage", query = "SELECT m FROM Message m WHERE m.idmessage = :idmessage"),
    @NamedQuery(name = "Message.findByName", query = "SELECT m FROM Message m WHERE m.name = :name"),
    @NamedQuery(name = "Message.findByTimeStamp", query = "SELECT m FROM Message m WHERE m.timeStamp = :timeStamp")})
public class Message implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "idmessage")
    private Long idmessage;
    @Size(max = 45)
    @Column(name = "Name")
    private String name;
    @Column(name = "timeStamp")
    @Temporal(TemporalType.TIMESTAMP)
    private Date timeStamp;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "messageIdmessage")
    private Collection<Field> fieldCollection;
    @JoinColumn(name = "topic_idtopic", referencedColumnName = "idtopic")
    @ManyToOne(optional = false)
    private Topic topicIdtopic;

    public Message() {
    }

    public Message(Long idmessage) {
        this.idmessage = idmessage;
    }

    public Long getIdmessage() {
        return idmessage;
    }

    public void setIdmessage(Long idmessage) {
        this.idmessage = idmessage;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(Date timeStamp) {
        this.timeStamp = timeStamp;
    }

    @XmlTransient
    public Collection<Field> getFieldCollection() {
        return fieldCollection;
    }

    public void setFieldCollection(Collection<Field> fieldCollection) {
        this.fieldCollection = fieldCollection;
    }

    public Topic getTopicIdtopic() {
        return topicIdtopic;
    }

    public void setTopicIdtopic(Topic topicIdtopic) {
        this.topicIdtopic = topicIdtopic;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idmessage != null ? idmessage.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Message)) {
            return false;
        }
        Message other = (Message) object;
        if ((this.idmessage == null && other.idmessage != null) || (this.idmessage != null && !this.idmessage.equals(other.idmessage))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.ikg.dia.upm.faultmanagementsystem_backend.Message[ idmessage=" + idmessage + " ]";
    }
    
}
