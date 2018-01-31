/*	Object: Dog
	Purpose: Testing the Proxies
*/
const Dog = {
	name: 'Bubbles',
	age: 12,
	breed: 'French Poodle',
};

const safeHandler = {
	set(target, name, value) {
		// The likeKey is used to test the property inserted and the property that the object posseses
		const likeKey = Object.keys(target).find(k => k.toLocaleLowerCase() === name.toLocaleLowerCase());

		//	Checking if the object has a target similar or not equal to the property provided
		if (!(name in target) && likeKey) {
			throw new Error(`Ooops! Looks like we already have a(n) ${name} property but with the case of ${likeKey}`);
		}
		target[name] = value;
	},
};

//	Creating a safety proxy
const safety = new Proxy(Dog, safeHandler);
safety.NAME = 'Dudu';
