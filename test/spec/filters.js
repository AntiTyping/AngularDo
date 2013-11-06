'use strict';

describe('Filters', function() {

   beforeEach(module('AngularDoApp'));

   describe('pluralizeFilter', function() {
     it('should return string length', inject(function(pluralizeFilter) {
       expect(pluralizeFilter(0, "apple")).toBe('No apples');
       expect(pluralizeFilter(1, "apple")).toBe('1 apple');
       expect(pluralizeFilter(2, "apple")).toBe('2 apples');
     }));
   });
});

