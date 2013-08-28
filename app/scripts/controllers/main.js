'use strict';

angular.module('dashv2App')
  .controller('MainCtrl', ['$scope', 'Utils', 'Sugar', 'localStorageService', function ($scope, utils, sugar, localStorageService) {

    $scope.hashed = localStorageService.get('hashed') || '';
    $scope.username = localStorageService.get('username') || '';
    $scope.password = localStorageService.get('password') || '';
    $scope.database = localStorageService.get('database') || '';
    $scope.dbhistory = localStorageService.get('dbhistory') || [];

    // Tool Functions
    $scope.setHash = function() {
      this.hashed = $.md5(this.password);
    };

    $scope.gen = function() {
      this.password = utils.generate();
    };

    $scope.saveHash = function() {
      $scope.dbhistory.unshift({
        username : $scope.username,
        password : $scope.password,
        database : $scope.database,
        date : new Date()
      });
      localStorageService.add('dbhistory', JSON.stringify($scope.dbhistory));
    };

    $scope.clearHistory = function() {
      $scope.dbhistory = [];
      localStorageService.remove('dbhistory');
    };

    $scope.populateBox = function(index) {
      var data = $scope.dbhistory[index];
      $scope.username = data.username;
      $scope.password = data.password;
      $scope.database = data.database;
    };

    $scope.$watch(function() {
      localStorageService.add('hashed', $scope.hashed);
      localStorageService.add('username', $scope.username);
      localStorageService.add('password', $scope.password);
      localStorageService.add('database', $scope.database);
    });

  }]);
