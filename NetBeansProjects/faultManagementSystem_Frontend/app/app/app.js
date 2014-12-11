'use strict';

// Declare app level module which depends on views, and components
angular.module('faultManagementApp', [
  'ngRoute',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1',{templateUrl:'partials/partial1.html',controller:'MyCtrl1'});    
  $routeProvider.when('/view2',{templateUrl:'partials/partial2.html',controller:'appCtrl'}); 
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
