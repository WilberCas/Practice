// Generator function: listPeople
/*  eslint-disable no-plusplus, no-restricted-syntax */
function* listPeople() {
	let i = 0;
	yield i;
	i++;
	yield i;
	i++;
	yield i;
}

// Create a variable to have the function
const people = listPeople();
console.log(people);

// Creating an array of inventors to test generators
const inventors = [
	{ fist: 'Albert', last: 'Einstein', year: 1879 },
	{ fist: 'Isaac', last: 'Newton', year: 1642 },
	{ fist: 'Galileo', last: 'Galilei', year: 1564 },
	{ fist: 'Marie', last: 'Curie', year: 1867 },
	{ fist: 'Johannes', last: 'Kepler', year: 1571 },
	{ fist: 'Nicolaus', last: 'Copernicus', year: 1473 },
	{ fist: 'Max', last: 'Planck', year: 1858 },
];

// Function: loop
// Purpose: Parse through the inventors array
function* loop(arr) {
	console.log(inventors);
	for (const item of arr) {
		yield item;
	}
}

// Variable to use the loop function
const inventorGen = loop(inventors);
