'use strict';

/**
 * @ngdoc function
 * @name assignment1App.controller:PlayCtrl
 * @description
 * # PlayCtrl
 * Controller of the assignment1App
 */
angular.module('assignment1App')
  .controller('CallbackCtrl', ['$timeout', function ($timeout) {

    var vm = this;
    vm.theAnswer = null;

    // 1. synchronous calculation
    vm.theAnswer = superCalculate();

    // 2. synchronous calculation
    // superCalculateAsync(function(value){
    //     vm.theAnswer = value;
    //   });

    function delay(ms) {
      ms += new Date().getTime();
      while (new Date() < ms){}
    }

    // This function blocks the UI duo to its synchronous nature
    function superCalculate(){
      delay(5000);
      return 42;
    }

    // This function is not blocking the UI duo to its asynchronous nature
    // https://docs.angularjs.org/api/ng/service/$q
    function superCalculateAsync(callback){
      $timeout(function() {
          callback(42);
      }, 5000);

    };


  }]);
