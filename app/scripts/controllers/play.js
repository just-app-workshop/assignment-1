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

      var result=[];

      for(var i=0; i<arr.length; i++){

        if( (arr[i] % 2) === 1 ){ //number mod 2 === 1 it's odd
          result.push(arr[i]);
        }

      }

      return result;

    }

    function even(arr){

      // TODO: remove odd values
      var result = [];

      for(var i=0; i<arr.length; i++){

        if( (arr[i] % 2) === 0 ){ //number mod 2 === 0 it's even
          result.push(arr[i]);
        }

      }

      return result;
    }


    function sort(arr){

      // TODO: sort the values
      var result = arr;
      result.sort(function(a, b){return b-a});

      return result;

    }

  });
