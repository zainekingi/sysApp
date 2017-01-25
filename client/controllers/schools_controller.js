/* ==========================================================================
FILE:       SCHOOLS_CONTROLLER
AUTHOR:     Zaine Kingi
DATE:       24-01-17
DESC:       Main controller for the School object interaction.
========================================================================== */
// Instantiate the app.
var sysApp = angular.module('sysApp');

// Define the controller and dependencies.
sysApp.controller('SchoolsController', ['$scope', '$routeParams', '$location', '$http', function($scope, $routeParams, $loaction, $http) {
    console.log('SchoolsController loaded...');
    // Get all schools.
    $scope.getSchools = function() {
        $http.get('/api/schools').success(function(response) {
            $scope.schools = response;
        });
    }
    // Get school by ID.
    // Add school.
    // Update school.
    // Delete school.

}]);