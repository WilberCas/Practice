/*	Class: MovieCollection
	Extends: Array
*/
class MovieCollection extends Array {
	constructor(name, ...items) {
		super(...items);
		this.name = name;
	}
	// Adding a method to add a movie
	add(movie) {
		this.push(movie);
	}
	// This method will rate movies
	topRated(limit = 10) {
		// In this case .sort() is an arrow fucntion that takes two parameters that will be compared
		// They are both compared by the ? -1 :1
		// As well the array will be sliced to the limit set in the function.
		return this.sort((a, b) => (a.stars > b.stars ? -1 : 1)).slice(0, limit);
	}
}

// Created a movie collection
const movies = new MovieCollection(
	'Wes\'s Fav Movies ',
	{ name: 'Bee Movie', stars: 10 },
	{ name: 'Star Wars Trek', stars: 1 },
	{ name: 'Virgin Suicides', stars: 7 },
	{ name: 'King of the road', stars: 8 },
);

// Print to the screen
console.log(movies);
