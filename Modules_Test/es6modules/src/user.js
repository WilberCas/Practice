// Imported slug libraries for the URL
import slug from 'slug';
import base64 from 'base-64';
import { url } from './config';

/*	Name: User
		Purpose: Create a user from the provided arguments.
*/
export default function User(name, email, website) {
	return { name, email, website };
}

/*	Name:createUrl
		Purpose: Creates a url from the provided names.
*/
export function createUrl(name) {
	return `${url}/users/${slug(name.name)}`;
}

export function gravatar(email) {
	const hash = base64.encode(email);
	const photoUrl = `https://www.gravatar.com/avatar/${hash}`;
	return photoUrl;
}

