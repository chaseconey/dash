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

    $scope.deleteProject = function(index) {
      $scope.displayLocationDeletePopup = false;

      $scope.projects.splice(index, 1);
      localStorageService.add('projects', JSON.stringify($scope.projects));
    }

    $scope.archive = function(index) {
      var oldTodos = $scope.projects[index].todos;
      $scope.projects[index].todos = [];
      angular.forEach(oldTodos, function(todo) {
          if (!todo.done) $scope.projects[index].todos.push(todo);
      });
      localStorageService.add('projects', JSON.stringify($scope.projects));
    };

    $scope.addTodo = function(index) {
      var project = $scope.projects[index];
      if(project.todos === undefined) {
          project.todos = [];
      }
      project.todos.push({
          text: '',
          done: false,
          editing: true
      });
      localStorageService.add('projects', JSON.stringify($scope.projects));
    };

    $scope.startEditing = function(todo) {
      todo.editing=true;
      $scope.editedTodo = todo;
    };

    $scope.doneEditing = function(todo){
      todo.editing=false;
      $scope.editedTodo = null;
    };

    $scope.hideProjectInfo = function(index) {
      $scope.projects[index].shown = !$scope.projects[index].shown
    };

    $scope.showDeleteLocationPopup = function(options, id) {
      if (options === true) {
          $scope.displayLocationDeletePopup = true;
      } else {
          $scope.displayLocationDeletePopup = false;
      }
      $scope.projectId = id;
    };
  }]);
