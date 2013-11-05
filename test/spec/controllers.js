'use strict';

describe('Controllers', function () {

   beforeEach(module('AngularDoApp'));

   it("should be true", function() {
     expect(true).toEqual(true);
   });

   describe("TaskCtrl", function() {
     var TaskCtrl, scope;

     beforeEach(inject(function ($controller, $rootScope) {
       scope = $rootScope.$new();
       TaskCtrl = $controller('TaskCtrl', { $scope: scope });
     }));

     it('should populate scope with list of tasks', function() {
       expect(scope.tasks.length).toEqual(3);
     });

     describe("add", function() {
       var task;

       it("should adds new task to task list", function() {
         task = jasmine.createSpy("task");
         scope.add(task);
         expect(scope.tasks.length).toEqual(4);
       });
     });

     describe("remove", function() {
       it("should remove task to task list", function() {
         var task = jasmine.createSpy("task");
         scope.remove(1, task);
         expect(scope.tasks.length).toEqual(1);
       });
     });
   });
});
