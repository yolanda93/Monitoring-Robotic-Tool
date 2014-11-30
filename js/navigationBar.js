

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
                    "module": "Mission_Planner",
                  	"process":{"id":"1","Name":"Mission_Planner"},
                  	"message":{"Name":"ActionConfirmation","Type":"Input"}                         	
                  },
                  {
                    "module":"Mission_Planner",
                  	"process":{"id":"1", "Name": "Mission_Planner"},
                  	"message":{"Name":"StateMapAbstraction", "Type":"Input"}                            	
                  },
                  {
                    "module":"Mission_Planner",
                  	"process":{"id":"1", "Name":  "Mission_Planner"},
                  	"message":{"Name":"ActionRequest","Type":"Input"}                               	
                  },
                  {
                  	"module": "Fligth_Controller",
                  	"process": {"id":"2","Name":  "Fligth_Controller"},
                  	"message":{"Name": "StateMapAbstraction","Type":"Input"}
                  },
                  {
                  	"module": "Fligth_Controller",
                  	"process":{"id":"2","Name":  "Fligth_Controller"},
                  	"message":{"Name":"ActionRequest","Type":"Output"}
                  },
                  {
                  	"module": "Fligth_Controller",
                  	"process": {"id":"2","Name":  "Fligth_Controller"},
                  	"message":{"Name":"ActionConfirmation","Type":"Input"}
                  },
                  {
                  	"module": "Fligth_Controller",
                  	"process": {"id":"2","Name": "Fligth_Controller"},
                  	"message":{"Name":"FlightOrder","Type":"Input"}
                  },
                  {
                  	"module": "Fligth_Controller",
                  	"process": {"id":"3","Name":  "Pilot_Driver"},
                  	"message":{"Name": "FlightOrder","Type":"Output"}
                  },
                  {
                  	"module": "Computer_Vision",
                  	"process": {"id":"3","Name":  "Odometry_Driver"},
                  	"message":{"Name":"OdometryChange","Type":"Output"}
                  },           
                  {
                  	"module":"Computer_Vision",
                  	"process": {"id":"4", "Name": "Camera_Driver"},
                  	"message":{"Name": "RealImageOnFlight","Type":"Output"} 
                  },
                   {
                  	"module":"Computer_Vision",
                  	"process": {"id":"5","Name":  "Camera_Processor"},
                  	"message":{"Name": "RealImageOnFlight","Type":"Output"}
                  },
                  {
                  	"module":"Computer_Vision",
                  	"process": {"id":"5","Name":  "Camera_Processor"},
                  	"message":{"Name": "CameraAbstraction","Type":"Output"}
                  },
                   {
                  	"module":"Computer_Vision",
                  	"process": {"id":"5","Name":  "Robot_Detector"},
                  	"message":{"Name":"CameraFrameAbstraction","Type":"Output"}
                  },
                   {              
                  	"module":"Computer_Vision",
                  	"process": {"id":"5","Name":  "Robot_Detector"},
                  	"message":{"Name":"GridStateAbstraction","Type":"Output"}
                  },
                  {
                  	"module":"Computer_Vision",
                  	"process": {"id":"5","Name": "Robot_Detector"},
                  	"message":{"Name":"RobotStateAbstraction","Type":"Output"}
                  },                  
                  {
                  	"module":"Computer_Vision",
                  	"process": {"id":"6","Name":  "Robot_Detector"},
                  	"message": {"Name":"UAVPositionChange","Type":"Output"}
                  },
                  {
                  	"module":"Computer_Vision",
                  	"process":{"id":"7","Name":  "Grid_Detector"},
                  	"message": {"Name":"GridStateAbstraction","Type":"Output"}
                  },
                  {
                  	"module":"Computer_Vision",
                  	"process": {"id":"7","Name":  "Grid_Detector"},
                  	"message": {"Name": "CameraFrameAbstraction","Type":"Output"}
                  },
                  {
                  	"module": "Computer_Vision",
                  	"process": {"id":"8","Name":  "State_Map_Estimator"},
                  	"message":{"Name": "RobotStateAbstraction","Type":"Output"}
                  },
                  {
                  	"module": "Computer_Vision",
                  	"process": {"id":"8","Name":  "State_Map_Estimator"},
                  	"message":{"Name": "GridStateAbstraction","Type":"Output"}
                  },
                  {
                  	"module": "Computer_Vision",
                  	"process": {"id":"8","Name":  "State_Map_Estimator"},
                  	"message":{"Name":"StateMapAbstraction","Type":"Output"}
                  },               
                  {
                  	"module": "Computer_Vision",
                  	"process":{"id":"9","Name":  "Pose_Estimator"}, 
                  	"message":{"Name":"GridStateAbstraction","Type":"Output"}
                  },
                  {
                  	"module": "Computer_Vision",
                  	"process": {"id":"9", "Name": "Pose_Estimator"}, 
                  	"message":{"Name":"OdometryChange","Type":"Output"}
                  },
                  {
                  	"module": "Computer_Vision",
                  	"process": {"id":"9", "Name": "Pose_Estimator"}, 
                  	"message":{"Name":"UAVPositionChange","Type":"Output"}
                  }
              ];

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









