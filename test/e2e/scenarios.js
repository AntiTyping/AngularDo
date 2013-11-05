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

  describe("Add a new task", function() {
    describe("when the new task is valid", function() {
      beforeEach(function() {
        input('task.name').enter("New task");
        element('button.js-add').click();
      });

      it("should add it to the list", function() {
        expect(element('tr.task:last').text()).toMatch(/New task/);
        expect(repeater('tr.task').count()).toBe(4);
      });

      it('should clear the new task box', function() {
        expect(input('task.name').val()).toEqual('');
      });
    });

    describe("when the new task is invalid", function() {
      beforeEach(function() {
        input('task.name').enter("");
        element('button.js-add').click();
      });

      it("should leave the task list unchanged", function() {
        expect(repeater('tr.task').count()).toBe(3);
      });

      it("should display an error message", function() {
        expect(element('div.alert').count()).toBe(1);
      });
    });
  });

  describe("Mark task as done", function() {
    it("should remove the task from the task list", function() {
      element('button.js-done:last').click();
      expect(repeater('tr.task').count()).toBe(2);
    });
  });
});

