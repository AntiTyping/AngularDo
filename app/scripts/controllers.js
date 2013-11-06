'use strict';

angular.module('AngularDoApp')
  .controller('TaskCtrl', function ($scope, Task, $resource) {
    $scope.tasks = Task.query();

    $scope.add = function(task) {
      var newTask = new Task();
      newTask.name = task.name;
      newTask.priority = task.priority;
      newTask.$save();
      $scope.tasks.push(newTask);
    };

    $scope.remove = function(index, task) {
      var id = task.url.replace("http://localhost:3000/tasks/", '');
      task.$remove({id: id});
      $scope.tasks.splice(index, 1);
    };
  })
  .factory('Task', ['$resource', function($resource){
    return $resource('http://localhost\\:3000/:path/:id', {}, {
      query: {method:'GET', params:{path:'tasks.json'}, isArray:true},
      get: {method:'GET', params:{path:''}},
      save: {method:'POST', params:{path:'tasks.json'}},
      remove: {method:'DELETE', params:{path:'tasks'}}
    });
  }]);;
