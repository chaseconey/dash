'use strict';

angular.module('dashv2App')
  .service('Utils', function Utils() {
    this.generate = function() {
      return Math.random().toString(36).slice(2);
    };
  });
