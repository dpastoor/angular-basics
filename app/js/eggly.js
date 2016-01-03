angular.module('Eggly', [
  //array of dependencies
])
.controller('MainCtrl', function($scope) {
  // scope is the glue between the controller and the View
  $scope.title = "Welcome!";
    $scope.messages = [
      {id:1, title: 'title1', text: 'message1', category: 'cat1'},
      {id:2, title: 'title2', text: 'message2', category: 'cat1'},
      {id:3, title: 'title3', text: 'message3', category: 'cat2'},
      {id:4, title: 'title4', text: 'message4', category: 'cat2'},
      {id:5, title: 'title5', text: 'message5', category: 'cat3'},
      {id:6, title: 'title6', text: 'message6', category: 'cat3'}
    ];

  $scope.currentCategory = null;

  // note: if you want to pass in the category name itself rather
  // than the whole message, initializing the currentCategory
  // to null does not work as expected, as it immediately filters
  // on the null category, rather than no filtering
  var setCurrentCategory = function(category) {
      return $scope.currentCategory = category;
  };

  // attach to scope to make available to view
  $scope.setCurrentCategory = setCurrentCategory;
});
