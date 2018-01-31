/*	Function: ajax
	Purpose: Do the asyncronous request to a server using an URL
*/
function ajax(url) {
	fetch(url).then(data => data.json()).then(data => dataGen.next(data));
}

/*	Function: steps()
	Purpose: This function will yield each request one after the other
*/
/* eslint-disable no-unused-vars */
function* steps() {
	const beers = yield ajax('http://api.react.beer/v2/search?q=hops&type=beer');
	const wes = yield ajax('https://api.github.com/users/wesbos');
	const fatJoe = yield ajax('https://api.discogs.com/artist/51988');
}

// Created a dataGen variable to hold the steps function values
const dataGen = steps();
dataGen.next(); // This function is called because the generator function needs a .next() to begin.
