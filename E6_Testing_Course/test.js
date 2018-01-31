const dogs = [{ name: 'Bradley', age: 8 }, { name: 'Kaiser', age: 10 }, { name: 'Snickers', age: 2 }];

const markup = `<div class="dogs">
	${dogs.map(dog => `<li>${dog.name} is ${dog.age * 7}</li>`).join('')}
</div>`;

console.log(markup);
document.body.innerHTML = markup;

const computers = [{ brand: 'DELL', releasedYear: 2009 }, { brand: 'Apple', releasedYear: 2011 }, { brand: 'HP', releasedYear: 2014 }];

const markup2 = `<div class="computers">
	<ul> ${computers.map(computer => `<li>The ${computer.brand} computer from ${computer.releasedYear}, is currently running</li>`).join('')}</ul>
</div>`;

document.body.innerHTML = markup2;

const name = 'Snickers';
const age = 100;
const sentence = highlight`My dog's name is ${name} and he is ${age} years old`;
console.log(sentence);

function highlight(strings, ...values) {
  // debugger;
  // From the array created when the arguments of the strings are passed
  let str = '';
  strings.forEach((string, i) => {
    str += `${string} <span class="h1">${values[i] || ''}</span>`;
  });
  return str;
}

function truncateDecimalPoints(num) {
  let temp = num;
  temp %= 1;
  num -= temp;
  return num;
}

const persons = [{ name: 'Wilber', age: 19 }, { name: 'Josh', age: 21 }, { name: 'Jack', age: 22 }, { name: 'Carlos', age: undefined }];

iterate(persons);
function iterate(array) {
  array.forEach((array) => {
    console.log(`Person: ${array.name} Age: ${array.age || ''}`);
  });
}


console.log(truncateDecimalPoints(12.45676));
console.log(markup2);
