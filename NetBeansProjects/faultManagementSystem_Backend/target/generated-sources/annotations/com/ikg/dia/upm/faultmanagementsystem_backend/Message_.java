package com.ikg.dia.upm.faultmanagementsystem_backend;

import com.ikg.dia.upm.faultmanagementsystem_backend.Field;
import com.ikg.dia.upm.faultmanagementsystem_backend.Topic;
import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.1.v20130918-rNA", date="2014-12-11T13:12:04")
@StaticMetamodel(Message.class)
public class Message_ { 

    public static volatile SingularAttribute<Message, Date> timeStamp;
    public static volatile SingularAttribute<Message, Topic> topicIdtopic;
    public static volatile SingularAttribute<Message, Long> idmessage;
    public static volatile SingularAttribute<Message, String> name;
    public static volatile CollectionAttribute<Message, Field> fieldCollection;

}