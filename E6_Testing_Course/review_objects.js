/*	eslint-disable no-unused-vars, func-names, no-console  */

/*	Function: Dog
	Purpose: Practice iheritance and prototyping
*/
function Dog(name, breed) {
	this.name = name;
	this.breed = breed;
}

//	Created two Dogs: Snickers and sunny
const snickers = new Dog('Snickers', 'King Charles');
const sunny = new Dog('Sunny', 'Golden Doodle');

/*	Prototype: Bark
	Purpose: ""
*/
Dog.prototype.bark = function () {
	console.log(`Bark Bark! My name is ${this.name} and I'm a ${this.breed} `);
};

/*	Prototype: Cuddle
	Purpose: ""
*/
Dog.prototype.cuddle = function () {
	console.log('I love you owner');
};

/*	Class: Doggo
	Purpose: Test the difference between a function object and a class
*/
class Doggo {
	Doggo(name, breed) {
		this.name = name;
		this.bred = breed;
	}
	/*	Function: bark
		Purpose: Prints back the name as well as the breed
	*/
	bark() {
		console.log(`Bark My name is ${this.name} and I'm a ${this.breed} Doggo :3`);
	}
	/*	Fucntion: cuddle
		Purpose: Prints the name of the doggo when it cuddles
	*/
	cuddle() {
		console.log(`I love you owner. It's me ${this.name}`);
	}
}

//	Two Doggos to compare
const spot = new Doggo('Spot', 'Dalmatian');
const dudu = new Doggo('Dudu', 'Poodle');

