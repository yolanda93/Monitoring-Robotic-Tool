'use strict';

/*Directives*/

angular.module('myApp.directives',[]).
   directives('appVersion',['version',function(version){
         return function(scope,elm,attrs){
           elm.text(version)
       };
       
}]);
