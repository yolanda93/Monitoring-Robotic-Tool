

var app = angular.module('toolController', ['ui.bootstrap']);

app.controller('myController', function ($scope) {
$scope.oneAtATime = true;

  $scope.groups = ['Mission Planner','Fligth_Controller', 'Pilot_Driver','Odometry_Driver','Camera_Driver','Camera_Processor','Robot_Detector', 'Grid_Detector','State_Map_Estimator','Pose_Estimator'];


  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
});







