//	Creating a new set to save people that are entering the restaurant
const brunch = new Set();

//	As people enter
brunch.add('Wes');
brunch.add('Sarah');
brunch.add('Simone');

//	Ready to open!
const line = brunch.values();
//	Printing to the screen the values of the set

//	line.next() provides an generator. And .value provides the value of the generator.
console.log(line.next().value); //	wes
console.log(line.next().value); //	Sarah

//	Adding more people to the waiting brunch list.
brunch.add('Heather');
brunch.add('Snickers');

//	Printing to the screen the values of the set

console.log(line.next().value); //	Simone
console.log(line.next().value); //	Heather
console.log(line.next().value); // Snickers

