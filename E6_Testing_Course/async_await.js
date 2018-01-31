//	Creating variables
const res = fetch('https://github.com');
console.log(res); // Javascript doesn't wait until the fetch is done.

setInterval(() => console.log(Date.now()), 500); //	A lot of things on Javascript is ansyncronous


