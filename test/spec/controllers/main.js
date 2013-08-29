'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('dashv2App'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  describe('MainCtrl spec', function() {

    it('archive() should remove todos from the list that are done', function () {
      scope.projects = [
        {
          name : 'Test Project',
          todos : [
            { text : 'todo1', done : false, editing : false },
            { text : 'todo2', done : true, editing : false },
            { text : 'todo3', done : false, editing : false },
            { text : 'todo4', done : true, editing : false },
            { text : 'todo5', done : false, editing : false }
          ]
        }
      ];

      scope.archive(0);

      expect(scope.projects[0].todos.length.toEqual(3));
    });

  });
});
