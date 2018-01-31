'use strict';

// Testing Babel
var age = 100;
var people = ['Wilber', 'Josue'];
var fullNames = people.map(function (name) {
  return name + ' Castaneda';
});

// If I need to add plugins I can do it after the "targets" ending square brackets
