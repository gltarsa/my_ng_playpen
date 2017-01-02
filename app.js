var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {

  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
      templateUrl: 'pages/main_page.html',
      controller: 'mainController'
    })

  $routeProvider
    .when('/second', {
      templateUrl: 'pages/second_page.html',
      controller: 'mainController'  //using the same controller for now
    })

});

myApp.controller('mainController', [ '$scope', '$filter', function($scope, $filter) {

  $scope.handle = ""

  // update the lc and uc handle versions whenever handle changes.
  $scope.$watch('handle', function(newVal, oldVal) {
    console.log('newVal: ' + newVal);
    $scope.lcHandle = $filter('lowercase')(newVal);
    $scope.ucHandle = $filter('uppercase')(newVal);
  });

}]);
