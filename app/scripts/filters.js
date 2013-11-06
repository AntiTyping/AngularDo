'use strict';

angular.module('AngularDoApp')
  .filter('pluralize', function() {
    return function(number, noun){
      if (number == 0)
        return "No " + noun + "s";
      if (number == 1)
        return number + " " + noun;
      return number + " " + noun + "s";
    }
  });
