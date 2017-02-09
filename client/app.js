var sysApp = angular.module('sysApp', ['ngRoute']);

sysApp.config(function($routeProvider){
    $routeProvider
    .when('/', {
      controller: 'SchoolsController',
      templateUrl: 'views/home.html'
    })
    .when('/login', {
      controller: 'UsersController',
      templateUrl: 'views/login.html'
    })
    .when('/register', {
      controller: 'UsersController',
      templateUrl: 'views/register.html'
    })
    .when('/users', {
      controller: 'UsersController',
      templateUrl: 'views/users.html'
    })
    .when('/user/details/:id', {
      controller: 'UsersController',
      templateUrl: 'views/user_details.html'
    })
    .when('/user/edit/:id', {
      controller: 'UsersController',
      templateUrl: 'views/edit_details.html'
    })
    .when('/schools', {
      controller: 'SchoolsController',
      templateUrl: 'views/home.html'
    })
    .when('/schools/details/:id', {
      controller: 'schoolsController',
      templateUrl: 'views/school_details.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
