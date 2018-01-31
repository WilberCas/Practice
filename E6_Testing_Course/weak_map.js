//	Creating two dogs to test
let dog1 = { name: 'Snickers' };
let dog2 = { name: 'Sunny' };

//	Creating two maps. One strong and one weak
const strong = new Map();
const weak = new WeakMap();

//	Assigning them the value
strong.set(dog1, 'Snickers is the best!');
weak.set(dog2, 'Sunny is the second best');

dog1 = null;
dog2 = null;

