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
      var temp=arr.slice(0);
      for (var i=0;i<temp.length; i++){
        while((temp[i] % 2) === 0){
          temp.splice(i,1);
        }
      }
      var result = temp;

      return result;
    }

    function even(arr){
      var temp=arr.slice(0);
      for(var i=0; i<temp.length; i++){
        while(!((temp[i] % 2 )=== 0)){
          temp.splice(i,1);
        }
      }
      var result = temp;

      return result;
    }

    function sort(arr){
      var temp=arr.slice(0);
      temp.sort(function(a, b){return a-b;});
      var result = temp;

      return result;
    }

  });
