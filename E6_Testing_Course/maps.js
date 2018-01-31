//	Creating our first Map
const dogs = new Map();

//	Assigning values to dog
dogs.set('Snickers', 3);
dogs.set('Sunny', 2);
dogs.set('Hugo', 10);

//	Iterating through the dogs Map
dogs.forEach((val, key) => console.log(val, key));

for (const dog of dogs) {
	console.log(dog);
}

//	Using destructor to iterate
for (const [key, value] of dogs) {
	console.log(key, value);
}