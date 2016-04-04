'use strict';

/**
 * @ngdoc overview
 * @name assignment1App
 * @description
 * # assignment1App
 *
 * Main module of the application.
 */
angular
  .module('assignment1App', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/play', {
        templateUrl: 'views/play.html',
        controller: 'PlayCtrl',
        controllerAs: 'play'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
