var sysApp = angular.module('sysApp');
sysApp.controller('UsersController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
  console.log('UsersController loaded...');
  $scope.getUsers = function() {
    $http.get('/api/users').success(function(response){
      $scope.users = response;
    });
  }
}]);
