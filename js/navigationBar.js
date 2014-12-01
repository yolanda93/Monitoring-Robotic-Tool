

var app = angular.module('toolController', ['ui.bootstrap','ui.utils']);

app.controller('processBrowser', function ($scope) {
	$(document).ready(function () {
	$('label.tree-toggler').click(function () {
		$(this).parent().children('ul.tree').toggle(300);
	});
});
$scope.oneAtATime = true;

  $scope.groups = [
                    {
                    "module": {"id":"1","Name":"Mission_Planner2s"},
                    "process":{"id":"1","Name":"Mission_Planner"},
                    "message":{"Name":"ActionConfirmation","Type":"Input"}                          
                  },
                  {
                    "module":{"id":"1","Name":"Mission_Planner"},
                    "process":{"id":"1", "Name": "Mission_Planner"},
                    "message":{"Name":"StateMapAbstraction", "Type":"Input"}                              
                  },
                  {
                    "module":{"id":"1","Name":"Mission_Planner"},
                    "process":{"id":"1", "Name":  "Mission_Planner"},
                    "message":{"Name":"ActionRequest","Type":"Input"}                                 
                  },
                  {
                    "module": {"id":"2","Name":"Fligth_Controller"},
                    "process": {"id":"2","Name":  "Fligth_Controller"},
                    "message":{"Name": "StateMapAbstraction","Type":"Input"}
                  },
                  {
                    "module": {"id":"2","Name":"Fligth_Controller"},
                    "process":{"id":"2","Name":  "Fligth_Controller"},
                    "message":{"Name":"ActionRequest","Type":"Output"}
                  },
                  {
                    "module": {"id":"2","Name":"Fligth_Controller"},
                    "process": {"id":"2","Name":  "Fligth_Controller"},
                    "message":{"Name":"ActionConfirmation","Type":"Input"}
                  },
                  {
                    "module": {"id":"2","Name":"Fligth_Controller"},
                    "process": {"id":"2","Name": "Fligth_Controller"},
                    "message":{"Name":"FlightOrder","Type":"Input"}
                  },
                  {
                    "module": {"id":"2","Name":"Fligth_Controller"},
                    "process": {"id":"3","Name":  "Pilot_Driver"},
                    "message":{"Name": "FlightOrder","Type":"Output"}
                  },
                  {
                    "module": {"id":"4","Name":"Device_Driver"},
                    "process": {"id":"3","Name":  "Odometry_Driver"},
                    "message":{"Name":"OdometryChange","Type":"Output"}
                  },           
                  {
                    "module": {"id":"4","Name":"Device_Driver"},
                    "process": {"id":"4", "Name": "Camera_Driver"},
                    "message":{"Name": "RealImageOnFlight","Type":"Output"} 
                  },
                   {
                    "module":{"id":"4","Name":"Device_Driver"},
                    "process": {"id":"5","Name":  "Camera_Processor"},
                    "message":{"Name": "RealImageOnFlight","Type":"Output"}
                  },
                  {
                    "module":{"id":"4","Name":"Device_Driver"},
                    "process": {"id":"5","Name":  "Camera_Processor"},
                    "message":{"Name": "CameraAbstraction","Type":"Output"}
                  },
                   {
                    "module":{"id":"4","Name":"Vision_System"},
                    "process": {"id":"5","Name":  "Robot_Detector"},
                    "message":{"Name":"CameraFrameAbstraction","Type":"Output"}
                  },
                   {              
                    "module":{"id":"4","Name":"Vision_System"},
                    "process": {"id":"5","Name":  "Robot_Detector"},
                    "message":{"Name":"GridStateAbstraction","Type":"Output"}
                  },
                  {
                    "module":{"id":"4","Name":"Vision_System"},
                    "process": {"id":"5","Name": "Robot_Detector"},
                    "message":{"Name":"RobotStateAbstraction","Type":"Output"}
                  },                  
                  {
                    "module":{"id":"4","Name":"Vision_System"},
                    "process": {"id":"6","Name":  "Robot_Detector"},
                    "message": {"Name":"UAVPositionChange","Type":"Output"}
                  },
                  {
                    "module":{"id":"4","Name":"Vision_System"},
                    "process":{"id":"7","Name":  "Grid_Detector"},
                    "message": {"Name":"GridStateAbstraction","Type":"Output"}
                  },
                  {
                    "module":{"id":"4","Name":"Vision_System"},
                    "process": {"id":"7","Name":  "Grid_Detector"},
                    "message": {"Name": "CameraFrameAbstraction","Type":"Output"}
                  },
                  {
                    "module": {"id":"5","Name":"State_Map_Estimator"},
                    "process": {"id":"8","Name":  "State_Map_Estimator"},
                    "message":{"Name": "RobotStateAbstraction","Type":"Output"}
                  },
                  {
                    "module": {"id":"5","Name":"State_Map_Estimator"},
                    "process": {"id":"8","Name":  "State_Map_Estimator"},
                    "message":{"Name": "GridStateAbstraction","Type":"Output"}
                  },
                  {
                    "module": {"id":"5","Name":"State_Map_Estimator"},
                    "process": {"id":"8","Name":  "State_Map_Estimator"},
                    "message":{"Name":"StateMapAbstraction","Type":"Output"}
                  },               
                  {
                    "module": {"id":"5","Name":"State_Map_Estimator"},
                    "process":{"id":"9","Name":  "Pose_Estimator"}, 
                    "message":{"Name":"GridStateAbstraction","Type":"Output"}
                  },
                  {
                    "module": {"id":"6","Name":"Pose_Estimator"},
                    "process": {"id":"9", "Name": "Pose_Estimator"}, 
                    "message":{"Name":"OdometryChange","Type":"Output"}
                  },
                  {
                    "module": {"id":"6","Name":"Pose_Estimator"},
                    "process": {"id":"9", "Name": "Pose_Estimator"}, 
                    "message":{"Name":"UAVPositionChange","Type":"Output"}
                  }
              ];

              console.log($scope.groups);

  $scope.navigation = {"targetModule":"module",
                       "parentModule":"#side-navigation",
                       "TargetModule":"module",
                       "TargetModule":"module",
                       "TargetModule":"module",
                       "TargetModule":"module",
                   
                     };
  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false,
  };
 $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

});









