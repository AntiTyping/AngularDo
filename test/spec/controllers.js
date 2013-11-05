'use strict';

describe('Controllers', function () {

   beforeEach(module('AngularDoApp'));

   it("should be true", function() {
     expect(true).toEqual(true);
   });

   describe("TaskCtrl", function() {
     it('should populate scope with list of tasks', inject(function ($controller, $rootScope) {
       var scope = $rootScope.$new();
       $controller('TaskCtrl', { $scope: scope });
       expect(scope.tasks.length).toEqual(3);
     }));
   });
});
