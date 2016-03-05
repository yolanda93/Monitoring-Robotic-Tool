/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.ikg.dia.upm.faultmanagementsystem_backend.service;

import java.util.Set;
import javax.ws.rs.core.Application;

/**
 *
 * @author yolanda
 */
@javax.ws.rs.ApplicationPath("api")
public class ApplicationConfig extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new java.util.HashSet<>();
        addRestResourceClasses(resources);
        return resources;
    }

    /**
     * Do not modify addRestResourceClasses() method.
     * It is automatically populated with
     * all resources defined in the project.
     * If required, comment out calling this method in getClasses().
     */
    private void addRestResourceClasses(Set<Class<?>> resources) {
        resources.add(com.ikg.dia.upm.faultmanagementsystem_backend.NewCrossOriginResourceSharingFilter.class);
        resources.add(com.ikg.dia.upm.faultmanagementsystem_backend.service.ErrorMessageFacadeREST.class);
        resources.add(com.ikg.dia.upm.faultmanagementsystem_backend.service.FieldFacadeREST.class);
        resources.add(com.ikg.dia.upm.faultmanagementsystem_backend.service.MessageFacadeREST.class);
        resources.add(com.ikg.dia.upm.faultmanagementsystem_backend.service.ProcessFacadeREST.class);
        resources.add(com.ikg.dia.upm.faultmanagementsystem_backend.service.ProcessGroupFacadeREST.class);
        resources.add(com.ikg.dia.upm.faultmanagementsystem_backend.service.TopicFacadeREST.class);
    }
    
}
