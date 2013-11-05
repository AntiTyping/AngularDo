'use strict';

describe('Scenarios:', function() {
  beforeEach(function() {
    browser().navigateTo('/proxy/');
  });

  describe("Navigation", function() {
    it("should have Home link", function() {
      expect(element("ul.nav:first li:first").text()).toEqual("Home");
    });

    it("should have About link", function() {
      expect(element("ul.nav:first li:last").text()).toEqual("About");
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
        select('task.priority').option("medium");
        element('button.js-add').click();
      });

      it("should add it to the list", function() {
        expect(element('tr.task:last').text()).toMatch(/New task/);
        expect(repeater('tr.task').count()).toBe(4);
      });

      it("should set priority", function() {
        expect(element("span.priority:last").text()).toMatch(/medium/);
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

  describe("Filter by priority", function() {
    describe("when high priority is selected", function() {
      it("should display only high priority tasks", function() {
        element("a.priority:contains('high')").click();
        expect(repeater('tr.task').count()).toBe(1);
      });
    });

    describe("when high priority is selected", function() {
      it("should display only medium priority tasks", function() {
        element("a.priority:contains('medium')").click();
        expect(repeater('tr.task').count()).toBe(1);
      });
    });

    describe("when high priority is selected", function() {
      it("should display only medium priority tasks", function() {
        element("a.priority:contains('low')").click();
        expect(repeater('tr.task').count()).toBe(1);
      });
    });

    describe("when no priority is selected", function() {
      it("should display all tasks", function() {
        element("a.priority:contains('All')").click();
        expect(repeater('tr.task').count()).toBe(3);
      });
    });
  });

  describe("Task search", function() {
    it("should only display task that match the keyword", function() {
      input("query.name").enter("Task 1");
      expect(repeater('tr.task').count()).toBe(1);
      expect(element('tr.task').text()).toMatch(/Task 1/);
    });
  });
});

