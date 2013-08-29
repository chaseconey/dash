'use strict';

angular.module('dashv2App')
  .controller('MainCtrl', ['$scope', 'localStorageService', function ($scope, localStorageService) {

    $scope.projects = localStorageService.get('projects') || [];

    $scope.addProject = function() {
      var proj = {
          name: $scope.newProject.name,
          priority: $scope.newProject.priority,
          shown: true,
          todos: []
      };

      $scope.projects.push(proj);
      localStorageService.add('projects', JSON.stringify($scope.projects));

      $('#addProject').modal('toggle');
      $scope.newProject.name = '';
      $scope.newProject.priority = '';
    };

    $scope.archive = function(index) {
      var oldTodos = $scope.projects[index].todos;
      $scope.projects[index].todos = [];
      angular.forEach(oldTodos, function(todo) {
          if (!todo.done) $scope.projects[index].todos.push(todo);
      });
    };

    $scope.addTodo = function(index) {
      var project = $scope.projects[index];
      if(project.todos === undefined) {
          project.todos = [];
      }
      project.todos.push({
          text: 'test',
          done: false
      });
      localStorageService.add('projects', JSON.stringify($scope.projects));
    };

    $scope.hideProjectInfo = function(index) {
      $scope.projects[index].shown = !$scope.projects[index].shown
      $('#project-' + index + " .todos").toggle();
    }
  }]);
