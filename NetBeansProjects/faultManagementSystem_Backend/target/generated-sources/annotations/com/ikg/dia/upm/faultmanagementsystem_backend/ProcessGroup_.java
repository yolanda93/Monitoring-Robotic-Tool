package com.ikg.dia.upm.faultmanagementsystem_backend;

import com.ikg.dia.upm.faultmanagementsystem_backend.Process;
import javax.annotation.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.1.v20130918-rNA", date="2014-12-11T13:12:04")
@StaticMetamodel(ProcessGroup.class)
public class ProcessGroup_ { 

    public static volatile CollectionAttribute<ProcessGroup, Process> processCollection;
    public static volatile SingularAttribute<ProcessGroup, String> name;
    public static volatile SingularAttribute<ProcessGroup, Integer> idprocessGroup;

}