angular.module('Eggly', [
  //array of dependencies
])
.controller('MainCtrl', function($scope) {
  // scope is the glue between the controller and the View
  $scope.title = "Welcome!";
    $scope.messages = {
      1: {title: 'title1', text: 'message1', category: 'cat1'},
      2: {title: 'title2', text: 'message2', category: 'cat1'},
      3: {title: 'title3', text: 'message3', category: 'cat2'},
      4: {title: 'title4', text: 'message4', category: 'cat2'},
      5: {title: 'title5', text: 'message5', category: 'cat3'},
      6: {title: 'title6', text: 'message6', category: 'cat3'}
    };
});
