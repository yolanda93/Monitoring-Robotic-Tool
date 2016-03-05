myApp.controller('monitorController', function ($rootScope, $scope, $window,$timeout) {
$scope.isNotStarted = true;

  $scope.max = 200;
  $scope.active = true;
  $scope.progress = {value:0};
  $timeout(function(){$scope.progress.value=100;}, 3000);
  
  $scope.timerRunning = false;
 
            $scope.startTimer = function (){
                $scope.$broadcast('timer-start');
                $scope.timerRunning = true;
            };
 
            $scope.stopTimer = function (){
                $scope.$broadcast('timer-stop');
                $scope.timerRunning = false;
            };
        
 

});
