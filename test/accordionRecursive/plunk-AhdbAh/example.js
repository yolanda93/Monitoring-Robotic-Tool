function Node(name, children) {
    this.name = name;
    this.children = children || [];
}

angular.module('myApp', ['ui.bootstrap'])

.directive('nodeList', function($compile) {
    return {
        restrict: 'E',
        terminal: true,
        scope: {
            nodes: '=ngModel'
        },
        link: function ($scope, $element, $attrs) {
            if (angular.isArray($scope.nodes)) {
                $element.append('<accordion close-others="true"><node ng-repeat="item in nodes" ng-model="item"></node></accordion>');
            } 
            $compile($element.contents())($scope.$new());
        }
    };
})

.directive('node', function($compile) {
    return {
        restrict: 'E',
        terminal: true,
        scope: {
            node: '=ngModel'
        },
        link: function ($scope, $element, $attrs) {
            if (angular.isArray($scope.node.children) && $scope.node.children.length > 0) {
                $element.append('<accordion-group><accordion-heading>{{node.name}}</accordion-heading><node-list ng-model="node.children"></node-list></accordion-group>');
            } else {
                $element.append('<accordion-group><accordion-heading>{{node.name}}</accordion-heading></accordion-group>');
            }
            $compile($element.contents())($scope.$new());
        }
    };
})

.controller('myView', function($scope) {
  $scope.data = [
    new Node('Group 1', [
        new Node('Sub 1.1', [
            new Node('Sub 1.1.1', [
                new Node('Child 1.1.1.1'),
                new Node('Child 1.1.1.2')]),
            new Node('Sub 1.1.2', [
                new Node('Child 1.1.2.1'),
                new Node('Child 1.1.2.2'),
                new Node('Child 1.1.2.3')])]),
        new Node('Sub 1.2', [
            new Node('Child 1.2.1'),
            new Node('Child 1.2.2')])]),
    new Node('Group 2', [
        new Node('Sub 2.1', [
            new Node('Child 2.1.1')])])];
});
