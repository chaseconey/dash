'use strict';

angular.module('dashv2App')
  .controller('MainCtrl', ['$scope', 'Utils', function ($scope, utils) {
    // Tool Functions
    $scope.setHash = function() {
      this.hashed = $.md5(this.password);
    };

    $scope.gen = function() {
      this.password = utils.generate();
    };
  }]);
