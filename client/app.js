var sysApp = angular.module('sysApp', ['ngRoute']);

sysApp.config(function($routeProvider){
    $routeProvider
      .when('/', {
      controller: 'UsersController',
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
    .otherwise({
      redirectTo: '/'
    });
});
