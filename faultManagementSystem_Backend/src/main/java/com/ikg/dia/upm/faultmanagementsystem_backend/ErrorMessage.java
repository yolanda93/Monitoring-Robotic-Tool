/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.ikg.dia.upm.faultmanagementsystem_backend;

import java.io.Serializable;
import java.util.Date;
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
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author yolanda
 */
@Entity
@Table(name = "errorMessage")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "ErrorMessage.findAll", query = "SELECT e FROM ErrorMessage e"),
    @NamedQuery(name = "ErrorMessage.findByIderrorMessage", query = "SELECT e FROM ErrorMessage e WHERE e.iderrorMessage = :iderrorMessage"),
    @NamedQuery(name = "ErrorMessage.findByName", query = "SELECT e FROM ErrorMessage e WHERE e.name = :name"),
    @NamedQuery(name = "ErrorMessage.findByAssociateInput", query = "SELECT e FROM ErrorMessage e WHERE e.associateInput = :associateInput"),
    @NamedQuery(name = "ErrorMessage.findByAssociateOutput", query = "SELECT e FROM ErrorMessage e WHERE e.associateOutput = :associateOutput"),
    @NamedQuery(name = "ErrorMessage.findByTimeStamp", query = "SELECT e FROM ErrorMessage e WHERE e.timeStamp = :timeStamp")})
public class ErrorMessage implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "iderrorMessage")
    private Long iderrorMessage;
    @Size(max = 45)
    @Column(name = "Name")
    private String name;
    @Lob
    @Size(max = 65535)
    @Column(name = "Description")
    private String description;
    @Size(max = 45)
    @Column(name = "associateInput")
    private String associateInput;
    @Size(max = 45)
    @Column(name = "associateOutput")
    private String associateOutput;
    @Column(name = "timeStamp")
    @Temporal(TemporalType.TIMESTAMP)
    private Date timeStamp;
    @JoinColumn(name = "process_idprocess", referencedColumnName = "idprocess")
    @ManyToOne(optional = false)
    private Process processIdprocess;

    public ErrorMessage() {
    }

    public ErrorMessage(Long iderrorMessage) {
        this.iderrorMessage = iderrorMessage;
    }

    public Long getIderrorMessage() {
        return iderrorMessage;
    }

    public void setIderrorMessage(Long iderrorMessage) {
        this.iderrorMessage = iderrorMessage;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAssociateInput() {
        return associateInput;
    }

    public void setAssociateInput(String associateInput) {
        this.associateInput = associateInput;
    }

    public String getAssociateOutput() {
        return associateOutput;
    }

    public void setAssociateOutput(String associateOutput) {
        this.associateOutput = associateOutput;
    }

    public Date getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(Date timeStamp) {
        this.timeStamp = timeStamp;
    }

    public Process getProcessIdprocess() {
        return processIdprocess;
    }

    public void setProcessIdprocess(Process processIdprocess) {
        this.processIdprocess = processIdprocess;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (iderrorMessage != null ? iderrorMessage.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof ErrorMessage)) {
            return false;
        }
        ErrorMessage other = (ErrorMessage) object;
        if ((this.iderrorMessage == null && other.iderrorMessage != null) || (this.iderrorMessage != null && !this.iderrorMessage.equals(other.iderrorMessage))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.ikg.dia.upm.faultmanagementsystem_backend.ErrorMessage[ iderrorMessage=" + iderrorMessage + " ]";
    }
    
}
