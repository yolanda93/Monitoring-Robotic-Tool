/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.ikg.dia.upm.faultmanagementsystem_backend;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author yolanda
 */
@Entity
@Table(name = "field")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Field.findAll", query = "SELECT f FROM Field f"),
    @NamedQuery(name = "Field.findByIdfield", query = "SELECT f FROM Field f WHERE f.idfield = :idfield"),
    @NamedQuery(name = "Field.findByType", query = "SELECT f FROM Field f WHERE f.type = :type"),
    @NamedQuery(name = "Field.findByName", query = "SELECT f FROM Field f WHERE f.name = :name")})
public class Field implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "idfield")
    private Integer idfield;
    @Size(max = 45)
    @Column(name = "type")
    private String type;
    @Lob
    @Size(max = 2147483647)
    @Column(name = "content")
    private String content;
    @Size(max = 45)
    @Column(name = "Name")
    private String name;
    @JoinColumn(name = "message_idmessage", referencedColumnName = "idmessage")
    @ManyToOne(optional = false)
    private Message messageIdmessage;

    public Field() {
    }

    public Field(Integer idfield) {
        this.idfield = idfield;
    }

    public Integer getIdfield() {
        return idfield;
    }

    public void setIdfield(Integer idfield) {
        this.idfield = idfield;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Message getMessageIdmessage() {
        return messageIdmessage;
    }

    public void setMessageIdmessage(Message messageIdmessage) {
        this.messageIdmessage = messageIdmessage;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idfield != null ? idfield.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Field)) {
            return false;
        }
        Field other = (Field) object;
        if ((this.idfield == null && other.idfield != null) || (this.idfield != null && !this.idfield.equals(other.idfield))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.ikg.dia.upm.faultmanagementsystem_backend.Field[ idfield=" + idfield + " ]";
    }
    
}
