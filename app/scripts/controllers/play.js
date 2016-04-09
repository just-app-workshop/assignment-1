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

    var numbersByRef = [ 2, 5, 23, 14, 11, 66, 3, 32, 77, 0];

    var collection = [
      {
        name: 'Steve',
        score: 4
      }, {
        name: 'Nick',
        score: 10
      }, {
        name: 'Kim',
        score: 9
      }, {
        name: 'Evan',
        score: 6
      }, {
        name: 'John',
        score: 7
      }, {
        name: 'Jim',
        score: 5
      }
    ]
    var oddNumbers = odd(numbers);
    var evenNumbers = even(numbers);
    var sortedNumbers = sort(numbers);

    var sortedCollectionByScore = sortCollectionByScore(collection);
    var sortedCollectionByName = sortCollectionByName(collection);

    var sortedNumbersByRef = sortByRef(numbersByRef);

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.numbers = numbers;
    this.oddNumbers = oddNumbers;
    this.evenNumbers = evenNumbers;
    this.sortedNumbers = sortedNumbers;

    this.collection = collection;
    this.sortedCollectionByScore = sortedCollectionByScore;
    this.sortedCollectionByName = sortedCollectionByName;

    this.numbersByRef = numbersByRef;
    this.sortedNumbersByRef = sortedNumbersByRef;

    function odd(arr){
      return _.filter(arr, function(element){
        return element % 2 == 1;
      })
    }

    function even(arr){
      return _.filter(arr, function(element){
        return element % 2 == 0;
      })
    }

    function sort(arr){
      return _.sortBy(arr, function(num){
        return num; }
      );
    }

    function sortCollectionByScore(collection){
      return _.sortBy(collection, function(element){
        return element.score; }
      );
    }

    function sortCollectionByName(collection){
      return _.sortBy(collection, function(element){
        return element.name; }
      );
    }

    function sortByRef(arr){
      arr = arr.sort(function(a, b) {
        return a - b;
      });

      return arr;
    }

    //
    // Objects reference
    //

    var objA = {
      title: 'foo',
      description: 'bar',
      value: 10
    }

    var objB = objA;
    var objC = objB;

    objC.title = 'buz';
    objC.value = 20;

    this.objA = objA;
    this.objB = objB;
    this.objC = objC;
  });
