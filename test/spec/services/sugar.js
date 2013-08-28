'use strict';

describe('Service: sugar', function () {

  // load the service's module
  beforeEach(module('dashv2App'));

  // instantiate service
  var sugar;
  beforeEach(inject(function (_sugar_) {
    sugar = _sugar_;
  }));

  it('should do something', function () {
    expect(!!sugar).toBe(true);
  });

});
