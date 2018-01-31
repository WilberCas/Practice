/*
 Name Class: Animal
 Purpose: It's the base class of other classes.
*/
class Animal {
	constructor(name) {
		this.name = name;
		this.thirst = 100;
		this.belly = [];
	}
	// Method: eat
	// Provides a way for the animal to eat
	drink() {
		this.thirst -= 10;
	}
	// Method: eat
	// Provides a way for animal to eat
	eat(food) {
		this.belly.push(food);
		return this.belly;
	}
}

/*
 Name Class:Dog
 Purpose: It's a child class of Animal to explain the concept of inheritance
 */
class Dog extends Animal {
	constructor(name, breed) {
		super(name);
		this.breed = breed;
	}
}

// Created two variables to check the classes (Animal and Dog)
const rhino = new Animal('Rhiney');
const snickers = new Dog('Snickers', 'King Charles');

// Output to the console
console.log(rhino);
console.log(snickers);
