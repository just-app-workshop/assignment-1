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
      for (var i=0;i<arr.length; i++){
        if(arr[i] % 2 === 0){
          arr.splice(i,1);
        }
      }
      var result1 = arr;

      return result1;
    }

    function even(arr){
      for(var i=0; i<arr.length; i++){
        if(arr[i] % 2 !== 0){
          arr.splice(i,1);
        }
      }
      var result2 = arr;

      return result2;
    }

    function sort(arr){
      arr.sort(function(a, b){return a-b;});
      var result3 = arr;

      return result3;
    }

  });
