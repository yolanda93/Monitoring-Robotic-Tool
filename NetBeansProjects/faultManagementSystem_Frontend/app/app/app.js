var myApp = angular.module('myApp', ['ngRoute','services','ui.bootstrap','ui.utils']);

myApp.config(function ($routeProvider) {
  $routeProvider
  .when('/recording',
  {
    controller: 'recordController',
    templateUrl: './partials/recording.html'
  })
  .when('/debugging', 
  {
    controller: 'debugController',
    templateUrl: './partials/debugging.html'
  })
  .otherwise({ redirectTo: '/debugging' });
});

myApp.controller('headerController', function ($scope, $location, $window) {
  $scope.isActive = function(path) {
    if (path === '/') {
      return $location.path() === path;
    } else {
      return ($location.path().substr(0, path.length) == path);
    }
  }
});