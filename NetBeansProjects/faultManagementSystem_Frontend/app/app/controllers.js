angular.module('myApp.controllers',['ui.bootstrap','ui.utils'])
.controller('MyCtrl1',function($scope,message){
   $scope.allMessage= message.findAll();  
 })

.controller('appCtrl',function($scope){
    
 //processGraph_draw();
processBrowser_init($scope);


})



.controller('browserViewer', function ($scope) {
console.log("controlador de browserViewer ");

// ng-click user
 $scope.controlViewer =function (name) {
      console.log(name);

      alert("Se ha seleccionado system"+ name.value);
  };

});


function processBrowser_init(browser_data){ 

browser_data.oneAtATime = true;

// Call to factory request to get modules, process and topics.
/*



*/

browser_data.groups = [
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
                    "module": {"id":"3","Name":"Device_Driver"},
                    "process": {"id":"3","Name":  "Odometry_Driver"},
                    "message":{"Name":"OdometryChange","Type":"Output"}
                  },           
                  {
                    "module": {"id":"3","Name":"Device_Driver"},
                    "process": {"id":"4", "Name": "Camera_Driver"},
                    "message":{"Name": "RealImageOnFlight","Type":"Output"} 
                  },
                   {
                    "module":{"id":"3","Name":"Device_Driver"},
                    "process": {"id":"5","Name":  "Camera_Processor"},
                    "message":{"Name": "RealImageOnFlight","Type":"Output"}
                  },
                  {
                    "module":{"id":"3","Name":"Device_Driver"},
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

browser_data.status = {
    isFirstOpen: true,
    isFirstDisabled: false,
  };


alert("Se ha inicializado el Process Browser");
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
var process = ['   Mission Planner   ','   Fligth Controller   ', '       Pilot Driver       ','  Odometry Driver  ','  Camera Driver  ','Camera Processor','  Robot Detector  ', '    Grid Detector    ','State Map Estimator','   Pose Estimator  '];
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
  var tamanoW= screen.width*0.8;
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

//network.on('select', function (properties) {
//  alert('Se ha seleccionado el proceso: ' + properties.nodes);
//});
}
