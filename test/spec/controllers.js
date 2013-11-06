'use strict';

describe('Controllers', function () {

   beforeEach(module('AngularDoApp'));

   it("should be true", function() {
     expect(true).toEqual(true);
   });

   describe("TaskCtrl", function() {
     var TaskCtrl, scope, Task, $save;

     beforeEach(inject(function ($controller, $rootScope) {
       scope = $rootScope.$new();
       $save = jasmine.createSpy("$save");
       Task = function Task() {
         return {
           $save: $save
         };
       };
       Task.query = function query() {
         return [
           {name: 'Task 1', priority: 'high'},
           {name: 'Task 2', priority: 'medium'},
           {name: 'Task 3', priority: 'low'}
         ];
       };
       TaskCtrl = $controller('TaskCtrl', { $scope: scope, Task: Task });
     }));

     it('should populate scope with list of tasks', function() {
       expect(scope.tasks.length).toEqual(3);
     });

     describe("add", function() {
       var task;

       beforeEach(function() {
         task = {name: 'Task 4', priority: 'high'}
       });

       it("should adds new task to task list", function() {
         scope.add(task);
         expect(scope.tasks.length).toEqual(4);
         expect(scope.tasks[3].name).toEqual('Task 4');
         expect(scope.tasks[3].priority).toEqual('high');
       });

       it("should save the new task", function() {
         scope.add(task);
         expect($save).toHaveBeenCalled();
       });
     });

     describe("remove", function() {
       var task;

       beforeEach(function() {
         task = {name: 'Task 4', priority: 'high'}
         task.$remove = jasmine.createSpy("$remove");
         task.url = "http://localhost:3000/tasks/111.json";
       });

       it("should remove task to task list", function() {
         scope.remove(1, task);
         expect(scope.tasks.length).toEqual(2);
       });

       it("should remove new task from data store", function() {
         scope.remove(1, task);
         expect(task.$remove).toHaveBeenCalled();
       });
     });
   });
});
