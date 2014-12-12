'use strict';

/*serivces*/

var service = angular.module('myApp.services',['ngResource']);

service.factory('message',function($resource){
    return $resource('http://localhost:8080/faultManagementSystem_Backend/api/field',{},{
      findAll:{method:'GET',isArray:true}
    });
    
    
});
     
