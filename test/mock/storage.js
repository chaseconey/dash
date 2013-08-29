'use strict';

angular.module('mockedStorage', [])
  .value('defaultStorage', [
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
  ]);