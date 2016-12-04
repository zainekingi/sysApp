var sysApp = angular.module('sysApp');
sysApp.controller('UsersController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
  console.log('UsersController loaded...');

  // Scope function to get all records from the database.
  $scope.getUsers = function() {
    $http.get('/api/users').success(function(response){
      $scope.users = response;
    });
  }
  // Scope function to fetch a record from the database.
  $scope.getUser = function(id) {
    // Get the record id.
    var id = $routeParams.id;
    $http.get('/api/users/' + id).success(function(response) {
      // Assign the user object as the response.
      $scope.users = response;
    });
  }
  // Scope function to add a record to the database.
  $scope.addUser = function() {
    var id = $routeParams.id;
    $http.post('/api/users/', $scope.users).success(function(response) {
      window.location.href = '/#/user/details/' + id;
    });
  }
  // Scope function to update a record in the database.
  $scope.updateUser = function() {
    // Get current record ID.
    var id = $routeParams.id;
    $http.put('/api/users/' + id, $scope.users).success(function(response) {
      // Redirect the user back to the updated user profile.
      window.location.href = '/#/user/details/' + id;
    });
  }
  // Scope function to remove a record from the database.
  $scope.deleteUser = function(id) {
    $http.delete('/api/users/' + id).success(function(response) {
      // Redirect to the homepage.
      window.location.href = '/'
    });
  }

}]);
