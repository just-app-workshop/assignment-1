'use strict';

/**
 * @ngdoc function
 * @name assignment1App.controller:PlayCtrl
 * @description
 * # PlayCtrl
 * Controller of the assignment1App
 */
angular.module('assignment1App')
  .controller('PlayCtrl', function () {
    var numbers = [ 2, 5, 23, 14, 11, 66, 3, 32, 77, 0];

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.numbers = numbers;
    this.oddNumbers = numbers.filter(function(a) { return a % 2 === 0; });
    this.evenNumbers = numbers.filter(function(a) { return a % 2 === 1; });
    this.sortedNumbers = numbers.sort(function(a, b){ return a - b }); //or return b-a for descending

  });
