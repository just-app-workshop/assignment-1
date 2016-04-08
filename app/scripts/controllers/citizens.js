'use strict';

/**
 * @ngdoc function
 * @name assignment1App.controller:PlayCtrl
 * @description
 * # PlayCtrl
 * Controller of the assignment1App
 */
angular.module('assignment1App')
  .controller('CitizensCtrl', function () {

    var valueA = 10;
    var valueB = 15;

    var valueSum  = 0;
    var valueDiff = 0;
    var valueAvg  = 0;

    var sum = function(a, b){
      return a + b;
    }

    var diff = function(a, b){
      return a - b;
    }

    var avg = function(a, b){
      return (a + b) / 2
    }

    var calc = function(a, b, fn){
      var v = fn(a,b);
      return v;
    }

    this.valueA = valueA;
    this.valueB = valueB;

    this.valueSum  = calc(valueA, valueB, sum);
    this.valueDiff = calc(valueA, valueB, diff);
    this.valueAvg  = calc(valueA, valueB, avg);

  });
