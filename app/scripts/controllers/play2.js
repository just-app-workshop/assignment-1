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
    var oddNumbers = odd(numbers);
    var evenNumbers = even(numbers);
    var sortedNumbers = sort(numbers);

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.numbers = numbers;
    this.oddNumbers = oddNumbers;
    this.evenNumbers = evenNumbers;
    this.sortedNumbers = sortedNumbers;

    function odd(arr){

      // TODO: remove even values
      var result = arr.filter(function(a) { return (a & 1) === 0; });

      return result;
    }

    function even(arr){

      // TODO: remove odd values
      var result = arr.filter(function(a) { return (a & 1) === 1; });

      return result;
    }

    function sort(arr){

      // TODO: sort the values
      var result = arr.sort(function(a, b){return a-b}); //or return b-a for descending

      return result;

    }

  });
