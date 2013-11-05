'use strict';

describe('Scenarios:', function() {
  beforeEach(function() {
    browser().navigateTo('/proxy/');
  });

  describe("Navigation", function() {
    it("should have Home link", function() {
      expect(element("ul.nav li:first").text()).toEqual("Home");
    });

    it("should have About link", function() {
      expect(element("ul.nav li:last").text()).toEqual("About");
    });
  });

  describe("Task List", function() {
    it('should display list of tasks', function() {
      expect(repeater('tr.task').count()).toBe(3);
    });
  });
});

