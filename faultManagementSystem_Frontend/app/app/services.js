'use strict';


var service = angular.module('services',['ngResource']);

service.factory('message',function($resource){
    return $resource('http://localhost:8080/faultManagementSystem_Backend/api/field',{},{
      findAll:{method:'GET',isArray:true}
    });
   
    
});

service.factory('processGroup',function($resource){
    return $resource('http://localhost:8080/faultManagementSystem_Backend/api/processGroup',{},{
      findAll:{method:'GET',isArray:true}
    });
   
    
});
   
service.factory('process',function($resource){
    return $resource('http://localhost:8080/faultManagementSystem_Backend/api/process',{},{
      findAll:{method:'GET',isArray:true}
    });
   
    
});
   
service.factory('topic',function($resource){
    return $resource('http://localhost:8080/faultManagementSystem_Backend/api/topic',{},{
      findAll:{method:'GET',isArray:true}
    });
   
    
});
   