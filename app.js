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

myApp.controller('mainController', [ '$rootScope', '$scope', '$log', '$filter', '$routeParams', function($rootScope, $scope, $log, $filter, $routeParams) {

  $scope.handle = $scope.ucHandle = $scope.lcHandle = $scope.rdHandle = "";
  $rootScope.handle_repeat = $routeParams.num || 1;

  $scope.updateHandleVariants = () => {
    $scope.lcHandle = $filter('lowercase')($scope.handle).repeat($rootScope.handle_repeat)
    $scope.ucHandle = $filter('uppercase')($scope.handle).repeat($rootScope.handle_repeat);
    $scope.rdHandle = Array.from($scope.handle).map((c) => {
      return (Math.floor(Math.random()*2)) ? c.toUpperCase() : c.toLowerCase();
    }).join('').repeat($rootScope.handle_repeat);
  };
}]);
