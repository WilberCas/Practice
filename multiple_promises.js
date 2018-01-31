/*	Function: go
	Purpose: retrives data using the fetch operator
*/
// async function go() {
// 	const p1 = fetch('https://api.github.com/users/wesbos');
// 	const p2 = fetch('https://api.github.com/users/stolinski');
// 	// Wait for both of them to come back
// 	const res = await Promise.all([p1, p2]); // Promise.all is gonna do both promises.
// 	// console.log(res);

// 	// Version 2
// 	// Return json instead of the promises resolved
// 	const dataPromises = res.map(r => r.json());
// 	// const wesAndScott = await Promise.all(dataPromises);
// 	// console.log(wesAndScott);

// 	// New Versions
// 	// Separate variables
// 	const [wes, scott] = await Promise.all(dataPromises);
// 	console.log(wes, scott);
// }

// go(); // Run

/*	Function: getData
	Purpose:
*/
async function getData(names) {
	// Fetching from the github api. Then obtaining the .json
	const promises = names.map(name => fetch(`https://api.github.com/users/${name}`).then(r => r.json()));

	// Creating two variables from the Promises.all array return
	// const [wes, scott] = await Promise.all(promises);
	// Print to the console both variable
	// console.log(wes, scott);
	
	// Creating a people variable to hold all requests
	const people = await Promise.all(promises);
	console.log(people);
}

getData(['wesbos', 'stolinski', 'darcyclarke']);
