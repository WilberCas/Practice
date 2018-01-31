//	Creating a dogs for making a WeakSet
let dog1 = { name: 'Snickers', age: 3 };
let dog2 = { name: 'Sunny', age: 1 };

//	Creating a WeakSet
const weakSauce = new WeakSet([dog1, dog2]);
console.log(weakSauce);
dog1 = null;
console.log(weakSauce);

