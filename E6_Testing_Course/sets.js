//	Const set
const people = new Set();

//	Adding new entries on people
people.add('Wes');
people.add('Snickers');
people.add('Kait');

//	Iterating through people set
for (const person of people) {
	console.log(person);
}

//	Creating in different ways a set
const students = new Set(['Wes', 'Kara', 'Tony']);
const dogs = ['Snickers', 'Sunny'];
const dogSet = new Set(dogs);

