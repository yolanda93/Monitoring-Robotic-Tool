

var app = angular.module('toolController', ['ui.bootstrap','ui.utils']);

app.controller('processBrowser', function ($scope) {
$scope.oneAtATime = true;

  $scope.groups = [
                  {
                    "module":"Mission Planner",
                  	"process":"Mission Planner",
                  	"message":{"Name":"ActionConfirmation","Type":"Input"}                         	
                  },
                  {
                    "module":"Mission Planner",
                  	"process":"Mission Planner",
                  	"message":{"Name":"StateMapAbstraction", "Type":"Input"}                            	
                  },
                  {
                    "module":"Mission Planner",
                  	"process":"Mission Planner",
                  	"message":{"Name":"ActionRequest","Type":"Input"}                               	
                  },
                  {
                  	"module": "Fligth_Controller",
                  	"process": "Fligth_Controller",
                  	"message":{"Name": "StateMapAbstraction","Type":"Input"}
                  },
                  {
                  	"module": "Fligth_Controller",
                  	"process": "Fligth_Controller",
                  	"message":{"Name":"ActionRequest","Type":"Output"}
                  },
                  {
                  	"module": "Fligth_Controller",
                  	"process": "Fligth_Controller",
                  	"message":{"Name":"ActionConfirmation","Type":"Input"}
                  },
                  {
                  	"module": "Fligth_Controller",
                  	"process": "Fligth_Controller",
                  	"message":{"Name":"FlightOrder","Type":"Input"}
                  },
                  {
                  	"module": "Fligth_Controller",
                  	"process": "Pilot_Driver",
                  	"message":{"Name": "FlightOrder","Type":"Output"}
                  },
                  {
                  	"module": "Computer_Vision",
                  	"process": "Odometry_Driver",
                  	"message":{"Name":"OdometryChange","Type":"Output"}
                  },           
                  {
                  	"module":"Computer_Vision",
                  	"process":"Camera_Driver",
                  	"message":{"Name": "RealImageOnFlight","Type":"Output"} 
                  },
                   {
                  	"module":"Computer_Vision",
                  	"process":"Camera_Processor",
                  	"message":{"Name": "RealImageOnFlight","Type":"Output"}
                  },
                  {
                  	"module":"Computer_Vision",
                  	"process":"Camera_Processor",
                  	"message":{"Name": "CameraAbstraction","Type":"Output"}
                  },
                   {
                  	"module":"Computer_Vision",
                  	"process":"Robot_Detector",
                  	"message":{"Name":"CameraFrameAbstraction","Type":"Output"}
                  },
                   {              
                  	"module":"Computer_Vision",
                  	"process":"Robot_Detector",
                  	"message":{"Name":"GridStateAbstraction","Type":"Output"}
                  },
                  {
                  	"module":"Computer_Vision",
                  	"process":"Robot_Detector",
                  	"message":{"Name":"RobotStateAbstraction","Type":"Output"}
                  },                  
                  {
                  	"module":"Computer_Vision",
                  	"process": "Grid_Detector",
                  	"message": {"Name":"UAVPositionChange","Type":"Output"}
                  },
                  {
                  	"module":"Computer_Vision",
                  	"process": "Grid_Detector",
                  	"message": {"Name":"GridStateAbstraction","Type":"Output"}
                  },
                  {
                  	"module":"Computer_Vision",
                  	"process": "Grid_Detector",
                  	"message": {"Name": "CameraFrameAbstraction","Type":"Output"}
                  },
                  {
                  	"module": "Computer_Vision",
                  	"process": "State_Map_Estimator",
                  	"message":{"Name": "RobotStateAbstraction","Type":"Output"}
                  },
                  {
                  	"module": "Computer_Vision",
                  	"process": "State_Map_Estimator",
                  	"message":{"Name": "GridStateAbstraction","Type":"Output"}
                  },
                  {
                  	"module": "Computer_Vision",
                  	"process": "State_Map_Estimator",
                  	"message":{"Name":"StateMapAbstraction","Type":"Output"}
                  },               
                  {
                  	"module": "Computer_Vision",
                  	"process": "Pose_Estimator",
                  	"message":{"Name":"GridStateAbstraction","Type":"Output"}
                  },
                  {
                  	"module": "Computer_Vision",
                  	"process": "Pose_Estimator",
                  	"message":{"Name":"OdometryChange","Type":"Output"}
                  },
                  {
                  	"module": "Computer_Vision",
                  	"process": "Pose_Estimator",
                  	"message":{"Name":"UAVPositionChange","Type":"Output"}
                  }
              ];

 
  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

});









