'use strict';

angular.module('AngularDoApp')
  .controller('TaskCtrl', function ($scope) {
    $scope.tasks = [
      {name: 'Task 1'},
      {name: 'Task 2'},
      {name: 'Task 3'},

    ];

    $scope.add = function(task) {
      var newTask = new Object();
      newTask.name = task.name;
      $scope.tasks.push(newTask);
    };

    $scope.remove = function(index, task) {
      $scope.tasks.splice(index, 1);
    };
  });
