package com.ikg.dia.upm.faultmanagementsystem_backend;

import com.ikg.dia.upm.faultmanagementsystem_backend.Process;
import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.1.v20130918-rNA", date="2014-12-11T13:12:04")
@StaticMetamodel(ErrorMessage.class)
public class ErrorMessage_ { 

    public static volatile SingularAttribute<ErrorMessage, Long> iderrorMessage;
    public static volatile SingularAttribute<ErrorMessage, Date> timeStamp;
    public static volatile SingularAttribute<ErrorMessage, Process> processIdprocess;
    public static volatile SingularAttribute<ErrorMessage, String> description;
    public static volatile SingularAttribute<ErrorMessage, String> name;
    public static volatile SingularAttribute<ErrorMessage, String> associateInput;
    public static volatile SingularAttribute<ErrorMessage, String> associateOutput;

}