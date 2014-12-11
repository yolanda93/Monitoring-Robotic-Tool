package com.ikg.dia.upm.faultmanagementsystem_backend;

import com.ikg.dia.upm.faultmanagementsystem_backend.ErrorMessage;
import com.ikg.dia.upm.faultmanagementsystem_backend.ProcessGroup;
import com.ikg.dia.upm.faultmanagementsystem_backend.Topic;
import javax.annotation.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.1.v20130918-rNA", date="2014-12-11T13:12:04")
@StaticMetamodel(Process.class)
public class Process_ { 

    public static volatile SingularAttribute<Process, Integer> port;
    public static volatile CollectionAttribute<Process, ErrorMessage> errorMessageCollection;
    public static volatile SingularAttribute<Process, Integer> idprocess;
    public static volatile SingularAttribute<Process, String> name;
    public static volatile SingularAttribute<Process, Integer> pid;
    public static volatile CollectionAttribute<Process, Topic> topicCollection;
    public static volatile CollectionAttribute<Process, Topic> topicCollection1;
    public static volatile SingularAttribute<Process, ProcessGroup> processGroupidprocessGroup;

}