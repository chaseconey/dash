'use strict';

angular.module('dashv2App', ['LocalStorageModule'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/tools', {
        templateUrl: 'views/tools.html',
        controller: 'ToolsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
