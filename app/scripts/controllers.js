'use strict';

angular.module('AngularDoApp')
  .controller('TaskCtrl', function ($scope) {
    $scope.tasks = [
      {name: 'Task 1', priority: 'high'},
      {name: 'Task 2', priority: 'medium'},
      {name: 'Task 3', priority: 'low'}
    ];

    $scope.add = function(task) {
      var newTask = new Object();
      newTask.name = task.name;
      newTask.priority = task.priority;
      $scope.tasks.push(newTask);
    };

    $scope.remove = function(index, task) {
      $scope.tasks.splice(index, 1);
    };
  });
