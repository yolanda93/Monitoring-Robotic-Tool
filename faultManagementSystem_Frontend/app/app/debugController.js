myApp.controller('debugController',function($scope,message,processGroup,process,topic){
  $scope.state = {
            open: false,
        };
$scope.viewBrowser = 'main';
//var graph = processGraph_draw();
$scope.allMessage= message.findAll();
processBrowser_init($scope);

 $scope.showMessages =function(name){
      $scope.view = 'message';
      $scope.selectedMessage=message;     
      var message = document.getElementsByTagName("message");
      console.log("Se ha seleccionado el topic "+ name);
  };
  
  $scope.changeSystemViewer =function(groupName){
   /*  console.log("Se ha seleccionado el sistema "+ groupName.Name +" con identificador "+ groupName.id + "procesos: " +  groupName.Name.process.id);  
     
     
      idsProcess= [];
      for (var i = 0; i <= groupName.Name.process.length; i++) {
      idsProcess.push(groupName.process[i].id); 
       console.log(groupName.process[i].id);
   }*/
     /*var pos = graph.getPositions(groupName.id);
     console.log("DestinoX " + pos[groupName.id].x);
     console.log("DestinoY " + pos[groupName.id].y);
     var center = graph.getCenterCoordinates();
     console.log("Center: " + "posX: "+ center.x + " posY: " + center.y);
      var options={
       scale:'0.7',
       offset:{x:0, y:0}
      };
     graph.focusOnNode(groupName.id,options);*/
      console.log("Se ha seleccionado el sistema "+ groupName.Name);
     if (groupName.Name == 'deviceDrivers') {
          $scope.viewBrowser = 'deviceDrivers';
           if($scope.state.open!=groupName.Name){            
             $scope.state = {
                open: groupName.Name
              };         
          }else{
               $scope.state = {
                open: false
              };   
          }
      } 
      if (groupName.Name == 'flightController') {
         console.log("Se ha seleccionado el sistema "+ groupName.Name);
         $scope.viewBrowser = 'FlightController';
          if($scope.state.open!=groupName.Name){            
             $scope.state = {
                open: groupName.Name
              };         
          }else{
               $scope.state = {
                open: false
              };   
          }
      } 
      if (groupName.Name == 'missionPlanner') {
         console.log("Se ha seleccionado el sistema "+ groupName.Name);
         $scope.viewBrowser = 'main';
          if($scope.state.open!=groupName.Name){            
             $scope.state = {
                open: groupName.Name
              };         
          }else{
               $scope.state = {
                open: false
              };   
          }
      } 
      if (groupName.Name == 'poseEstimator') {
         console.log("Se ha seleccionado el sistema "+ groupName.Name);
         $scope.viewBrowser = 'main';
          if($scope.state.open!=groupName.Name){            
             $scope.state = {
                open: groupName.Name
              };         
          }else{
               $scope.state = {
                open: false
              };   
          }
      } 
       if (groupName.Name == 'stateMapEstimator') {
         console.log("Se ha seleccionado el sistema "+ groupName.Name);
         $scope.viewBrowser = 'main';
          if($scope.state.open!=groupName.Name){            
             $scope.state = {
                open: groupName.Name
              };         
          }else{
               $scope.state = {
                open: false
              };   
          }
      }
        if (groupName.Name == 'visionSystem') {
         console.log("Se ha seleccionado el sistema "+ groupName.Name);
         $scope.viewBrowser = 'visionSystem';
          if($scope.state.open!=groupName.Name){            
             $scope.state = {
                open: groupName.Name
              };         
          }else{
               $scope.state = {
                open: false
              };   
          }
      }
  };
    
  $scope.changeProcessViewer =function(processName){
     /*console.log("Se ha seleccionado el sistema "+ processName.Name +"con identificador "+ processName.id);  
      var options={
       scale:'0.7',
       offset:{x:0, y:0}
      };
     graph.focusOnNode(processName.id,options);*/
  };
  
  $scope.resize =function(){
     /*console.log("Resize ");  
     graph.zoomExtent();*/
     $scope.viewBrowser = 'main';
 };

    $scope.isOpen = function(name) {
        return name === $scope.state.open;
    };
    
})





function processBrowser_init(browser_data){ 

browser_data.oneAtATime = true;

// Call to factory request to get modules, process and topics.
/**/
browser_data.groups = [
                     {
                    "module":{"id":"3","Name":"visionSystem"},
                    "process": {"id":"6","Name":  "cameraProcessor"},
                    "message":{"Name": "realImageOnFlight","Type":"Output"}
                  },
                  {
                    "module":{"id":"3","Name":"visionSystem"},
                    "process": {"id":"6","Name":  "cameraProcessor"},
                    "message":{"Name": "cameraAbstraction","Type":"Output"}
                  },
                   {
                    "module":{"id":"4","Name":"visionSystem"},
                    "process": {"id":"7","Name":  "robotDetector"},
                    "message":{"Name":"cameraAbstraction","Type":"Output"}
                  },
                   {              
                    "module":{"id":"4","Name":"visionSystem"},
                    "process": {"id":"7","Name":  "robotDetector"},
                    "message":{"Name":"gridStateAbstraction","Type":"Output"}
                  },
                  {
                    "module":{"id":"4","Name":"visionSystem"},
                    "process": {"id":"7","Name": "robotDetector"},
                    "message":{"Name":"robotStateAbstraction","Type":"Output"}
                  },                  
                  {
                    "module":{"id":"4","Name":"visionSystem"},
                    "process": {"id":"7","Name":  "robotDetector"},
                    "message": {"Name":"UAVPositionChange","Type":"Output"}
                  },
                  {
                    "module":{"id":"4","Name":"visionSystem"},
                    "process":{"id":"8","Name":  "gridDetector"},
                    "message": {"Name":"gridStateAbstraction","Type":"Output"}
                  },
                  {
                    "module":{"id":"4","Name":"visionSystem"},
                    "process": {"id":"8","Name":  "gridDetector"},
                    "message": {"Name": "cameraFrameAbstraction","Type":"Output"}
                  },
                  {
                    "module": {"id":"2","Name":"deviceDrivers"},
                    "process": {"id":"3","Name":  "pilotDriver"},
                    "message":{"Name": "flightOrder","Type":"Output"}
                  },
                  {
                    "module": {"id":"3","Name":"deviceDrivers"},
                    "process": {"id":"4","Name":  "odometryDriver"},
                    "message":{"Name":"odometryChange","Type":"Output"}
                  },           
                  {
                    "module": {"id":"3","Name":"deviceDrivers"},
                    "process": {"id":"5", "Name": "cameraDriver"},
                    "message":{"Name": "realImageOnFlight","Type":"Output"} 
                  }, 
                  {
                    "module":{"id":"1","Name":"missionPlanner"},
                    "process":{"id":"1", "Name": "missionPlanner"},
                    "message":{"Name":"stateMapAbstraction", "Type":"Input"}                              
                  },
                  {
                    "module":{"id":"1","Name":"missionPlanner"},
                    "process":{"id":"1", "Name":  "missionPlanner"},
                    "message":{"Name":"actionRequest","Type":"Input"}                                 
                  },
                  {
                    "module": {"id":"2","Name":"flightController"},
                    "process": {"id":"2","Name": "flightController"},
                    "message":{"Name": "stateMapAbstraction","Type":"Input"}
                  },
                  {
                    "module": {"id":"2","Name":"flightController"},
                    "process":{"id":"2","Name": "flightController"},
                    "message":{"Name":"actionRequest","Type":"Output"}
                  },
                  {
                    "module": {"id":"2","Name":"flightController"},
                    "process": {"id":"2","Name":  "flightController"},
                    "message":{"Name":"actionConfirmation","Type":"Input"}
                  },
                  {
                    "module": {"id":"2","Name":"flightController"},
                    "process": {"id":"2","Name": "flightController"},
                    "message":{"Name":"flightOrder","Type":"Input"}
                  },                           
                  {
                    "module": {"id":"5","Name":"stateMapEstimator"},
                    "process": {"id":"9","Name":  "stateMapEstimator"},
                    "message":{"Name": "robotStateAbstraction","Type":"Output"}
                  },
                  {
                    "module": {"id":"5","Name":"stateMapEstimator"},
                    "process": {"id":"9","Name":  "stateMapEstimator"},
                    "message":{"Name": "gridStateAbstraction","Type":"Output"}
                  },
                  {
                    "module": {"id":"5","Name":"stateMapEstimator"},
                    "process": {"id":"9","Name":  "stateMapEstimator"},
                    "message":{"Name":"stateMapAbstraction","Type":"Output"}
                  },               
                  {
                    "module": {"id":"6","Name":"poseEstimator"},
                    "process": {"id":"9", "Name": "poseEstimator"}, 
                    "message":{"Name":"odometryChange","Type":"Output"}
                  },
                  {
                    "module": {"id":"6","Name":"poseEstimator"},
                    "process": {"id":"9", "Name": "poseEstimator"}, 
                    "message":{"Name":"UAVPositionChange","Type":"Output"}
                  }
              ];

browser_data.status = {
    isFirstOpen: true,
    isFirstDisabled: false,
  };


//alert("Se ha inicializado el Process Browser");
}



// graphFunctions
function processGraph_draw() {
var nodes = null;
var edges = null;
var network = null;

//Prueba 1
var origin = [2,2,1,9,9,7,8,10,4,5,6,6,7,8];
var destination = [3,1,2,1,2,9,10,8,10,6,8,7,8,9];
var messages = ['FlightOrder', 'ActionConfirmation', 'ActionRequest', 'StateMapAbstraction','StateMapAbstraction','RobotStateAbstraction', 'GridStateAbstraction','UAVPositionChange', 'OdometryChange', 'RealImageOnFligth','CameraFrameAbstraction','CameraFrameAbstraction','GridStateAbstraction','GridStateAbstraction'];
var process = ['   Mission Planner   ','   Fligth Controller   ', '       Pilot Driver       ','  Odometry Driver  ','  Camera Driver  ','Camera Processor','  Robot Detector  ', '    Grid Detector    ','State Map Estimator ','   Pose Estimator  '];
// adjuntar SVG y sacar los puntos accediendo al DOM.

var pointX = [24364.9,28711.9,31942.9,10405.9,1067.92,5362.92,14818.9,10405.9,19631.9,14818.9];
var pointY = [-10697.8,-10099.8,-10099.8,-2558.84,-8828.84,-8828.84,-9858.8,-7222.84,-7720.84,-4665.84 ];



// Prueba 2
//var origin = [2,2,1,9,9,7,8,10,4,5,6,6,7,8,12,12,11,19,19,17,18,10,14,15,16,16,17,18];
//var destination = [3,1,2,1,2,9,10,8,10,6,8,7,8,9,13,11,12,11,12,19,10,18,10,16,18,17,18,19];
//var messages = ['FlightOrder', 'ActionConfirmation', 'ActionRequest', 'StateMapAbstraction','StateMapAbstraction','RobotStateAbstraction', 'GridStateAbstraction','UAVPositionChange', 'OdometryChange', 'RealImageOnFligth','CameraFrameAbstraction','CameraFrameAbstraction','GridStateAbstraction','GridStateAbstraction','Flight2Order', 'ActionCon2firmation', 'ActionReque2st', 'StateMapAbstrac2tion','StateMapAbstrac2tion','RobotStateAbstra2ction', 'GridStateAbstractio2n','UAVPositionChange2', 'OdometryChange2', 'RealImageOnFligth2','CameraFrameAbstraction2','CameraFrameAbstraction2','GridStateAbstraction2','GridStateAbstraction2'];
//var process = ['Mission Planner','Fligth_Controller', 'Pilot_Driver','Odometry_Driver','Camera_Driver','Camera_Processor','Robot_Detector', 'Grid_Detector','State_Map_Estimator','Pose_Estimator','Mission Planner2','Fligth_Controller2', 'Pilot_Driver2','Odometry_Driver2','Camera_Driver2','Camera_Processor2','Robot_Detector2', 'Grid_Detector2','State_Map_Estimator2','Pose_Estimator2'];
//var pointX = [24364.9,28711.9,31942.9,10405.9,1067.92,5362.92,14818.9,10405.9,19631.9,14818.9,64364.9,18711.9,21942.9,20405.9,2067.92,4362.92,24818.9,40405.9,29631.9,44818.9 ];
//var pointY = [-10697.8,-10099.8,-10099.8,-2558.84,-8828.84,-8828.84,-9858.8,-7222.84,-7720.84,-4665.84,-30697.8,-20099.8,-30099.8,-4558.84,-3828.84,-4828.84,-4858.8,-5222.84,-6720.84,-7665.84  ];




  alert("Se ha inicializado el Process Graph");

  // create an array with nodes
  var escala = 0.055;
  var escala2 = 0.05;
  var escala3 = 0.06;
  var ErrorColor = "color: red"
  
   // create an array with edges
   edges = [];
  // to fill the edges.
  for (var i = 0; i <= origin.length; i++) {
   edges.push({from: origin[i], to: destination[i], style: 'arrow', label: messages[i]});
 }
   // create an array with nodes.
   nodes = [];
  // to fill the nodes properties.
  for (var i = 0; i <= process.length; i++) {
   nodes.push( {id: i+1, label: process[i], x:pointX[i]*escala, y:pointY[i]*escala, shape: 'circle', allowedToMoveX: false, allowedToMoveY: false });
 }
    // create a network
  var canvas = document.getElementById('mynetwork');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var tamanoH= screen.height*0.4;
  var tamanoHPx= tamanoH + 'px' 
  console.log(screen.height);
  console.log(tamanoHPx);
  var tamanoW= screen.width*0.7;
  var tamanoWPx= tamanoW + 'px' 
  console.log(screen.width);
  console.log(tamanoWPx);
  var options = {
    //physics:{barnesHut:{gravitationalConstant:0, springConstant:0, centralGravity: 0}},
    clickToUse:false,
    selectable:false,
    smoothCurves:{dynamic:false, type: '1'},
      width: tamanoWPx,
      height: tamanoHPx 
    };


  var network = new vis.Network(canvas, data, options); 
  return network;
 

//network.on('select', function (properties) {
//  alert('Se ha seleccionado el proceso: ' + properties.nodes);
//});
}
