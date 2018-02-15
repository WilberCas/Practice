const data = fetch('https://api.github.com/users/petrgazarov');
data
.then(value => value.json())
.then((val) => {console.log(val)});
console.log(data);
