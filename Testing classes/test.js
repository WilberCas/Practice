/*
	Name Class: Dog
	Purpose: It's a class that contains name and breed as it attributes.
*/
class Dog {
	constructor(name, breed) {
		this.name = name;
		this.breed = breed;
	}
	// This function will make dog bark.
	bark() {
		console.log(`Bark Bark! My name is ${this.name}`);
	}
	// This function will make a dog cuddle.
	cuddle() {
		console.log(`I/'m ${this.name} love you owner!`);
	}
	// This function is a static method
	static info() {
		console.log('A dog is much better than a cat');
	}
	// This is a getter for the property of description
	get description() {
		return `${this.name} is a ${this.breed} type of dog`;
	}
	// This is a setter for a nickname
	set nickname(value) {
		this.nick = value.trim();
	}
	// This is a getter for nicknames.
	get nicknames() {
		return this.nick;
	}
}

// Created two doggos
const snickers = new Dog('Snickers', 'King Charles');
const sunny = new Dog('Sunny', 'Golden Doodle');

// Overriding Dog.prototype.bark function. Changes: it now console.logs the breed.
Dog.prototype.bark = function () {
	console.log(`Bark Bark! My name is ${this.name} and I'm a ${this.breed}`);
};

// Outputing the values of both doggos
console.log(snickers);
console.log(sunny);

