'use strict';

angular.module('AngularDoApp')
  .controller('TaskCtrl', function ($scope) {
    $scope.tasks = [
      {name: 'Task 1'},
      {name: 'Task 2'},
      {name: 'Task 3'},
    ];
  });
