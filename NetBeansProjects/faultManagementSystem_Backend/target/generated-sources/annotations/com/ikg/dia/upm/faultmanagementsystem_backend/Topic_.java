package com.ikg.dia.upm.faultmanagementsystem_backend;

import com.ikg.dia.upm.faultmanagementsystem_backend.Message;
import com.ikg.dia.upm.faultmanagementsystem_backend.Process;
import javax.annotation.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.1.v20130918-rNA", date="2014-12-11T13:12:04")
@StaticMetamodel(Topic.class)
public class Topic_ { 

    public static volatile CollectionAttribute<Topic, Process> processCollection;
    public static volatile SingularAttribute<Topic, Double> rate;
    public static volatile CollectionAttribute<Topic, Process> processCollection1;
    public static volatile SingularAttribute<Topic, String> name;
    public static volatile SingularAttribute<Topic, Integer> idtopic;
    public static volatile CollectionAttribute<Topic, Message> messageCollection;
    public static volatile SingularAttribute<Topic, String> type;
    public static volatile SingularAttribute<Topic, Double> bandwidth;

}