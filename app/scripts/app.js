'use strict';

angular.module('AngularDoApp', ['ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
