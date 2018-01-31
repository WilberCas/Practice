
// import {$,jQuery} from 'jquery';
// import slug from 'slug';
// import jsonp from 'jsonp';
// import { uniq } from 'lodash';
// import { apiKey, url, sayHi, dog } from './src/config';

// console.log(apiKey, url);
// const ages = [1, 1, 4, 52, 12, 4];
// console.log(uniq(ages));
// console.log(dog);
// sayHi('wes');

// Importing the module of Users
import User, { createUrl, gravatar } from './src/user';

// Creating a const to save user, profile and image
const wil = new User('Wilber Castaneda ', 'wcastaneda@ztr.com', 'wilbercastaneda.com');
const profile = createUrl(wil);
const image = gravatar(wil.email);

// Output to the console to see the results
console.log(wil);
console.log(profile);
console.log(image);
