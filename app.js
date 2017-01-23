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

  $routeProvider
    .when('/second/:num', {
      templateUrl: 'pages/second_page.html',
      controller: 'mainController'  //using the same controller for now
    })

});

myApp.service('myRepeat', function() {
  this.repeat = 1;
});

myApp.controller('mainController', ['$rootScope', '$scope', '$log', '$filter', '$routeParams', 'myRepeat', function($rootScope, $scope, $log, $filter, $routeParams, myRepeat) {

  $scope.mainCallCount = $scope.mainCallCount || 0;
  $scope.mainCallCount += 1;
  $scope.handle = $scope.ucHandle = $scope.lcHandle = $scope.rdHandle = "";

  myRepeat.repeat = $scope.handle_repeat = $routeParams.num || 1;

  $scope.updateHandleVariants = () => {
    myRepeat.repeat = $scope.handle_repeat = $routeParams.num || 1;
    $scope.lcHandle = $filter('lowercase')($scope.handle).repeat(myRepeat.repeat)
    $scope.ucHandle = $filter('uppercase')($scope.handle).repeat(myRepeat.repeat);
    $scope.rdHandle = Array.from($scope.handle).map((c) => {
      return (Math.floor(Math.random()*2)) ? c.toUpperCase() : c.toLowerCase();
    }).join('').repeat(myRepeat.repeat);
  };
}]);
