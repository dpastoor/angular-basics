angular.module('Eggly', [
  //arry of dependencies
])
.controller('MainCtrl', function($scope) {
  $scope.title = "Welcome!";
  $scope.messages = {
    1: {title: 'title1', text: 'message1'},
    2: {title: 'title2', text: 'message2'}
  };
});
