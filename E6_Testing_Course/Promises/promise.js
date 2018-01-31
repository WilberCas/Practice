const posts = [
  { title: 'I love JavaScript', author: 'Wes Bos', id: 1 },
  { title: 'CSS!', author: 'Chris Coyier', id: 2 },
  { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
];

const authors = [
  { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
  { name: 'Chris Coyier', twitter: '@chriscoyier', bio: 'CSS Tricks and CodePen' },
  { name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' },
];

/*  Name: getById
    Purpose: Searches for the object that matches with the provided id
    Date: 2018-01-25
*/
function getById(id) {
  // Creating a new Promise
  return new Promise((resolve, reject) => {
    // Searching for the post that contains the same id.
    const postReturn = posts.find(post => post.id === id);
    if (postReturn) {
      resolve(postReturn);
    } else {
      reject(Error('No post was found'));
    }
  });
}
/*  Name: hydrateAuthor
    Purpose: Provides an array with the name of the author.
    Date: 2018-01-25
*/
function hydrateAuthor(post) {
  // This returns a promise that will to mimick a database.
  return new Promise((resolve, reject) => {
    // Searching for the author that matches the post name.
    const findAuthor = authors.find(person => person.name === post.author);
    if (findAuthor) {
      // if the author is found assing the object of the author to the post.name
      post.author = findAuthor;
      resolve(post);
    } else {
      reject(Error('No post was found'));
    }
  });
}
// Calling the getById function and searching for the person with an id of 2
getById(2)
  .then(data => hydrateAuthor(data))
  .then((data) => {
    // We need another .then because hydrateAuthor returns another promise.
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
