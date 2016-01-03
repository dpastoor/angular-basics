angular.module('Eggly', [
  //array of dependencies
])
.controller('MainCtrl', function($scope) {
  // scope is the glue between the controller and the View
  $scope.title = "Welcome!";
  $scope.messages = {
    1: {title: 'title1', text: 'message1'},
    2: {title: 'title2', text: 'message2'}
  };
});
