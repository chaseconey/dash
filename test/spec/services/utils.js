'use strict';

describe('Service: utils', function () {

  // load the service's module
  beforeEach(module('dashv2App'));

  // instantiate service
  var utils;
  beforeEach(inject(function (_utils_) {
    utils = _utils_;
  }));

  it('should do something', function () {
    expect(!!utils).toBe(true);
  });

});
