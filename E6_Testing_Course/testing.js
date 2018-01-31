const button = document.querySelector("#pushy");
button.addEventListener("click", function () {
  console.log(this);
  this.classList.toggle("on");
});

// When you need a method to bind to an object
const person = {
  points: 23,
  score: () => {
    this.points = this.points + 1;
  },
};

const computer = {
  name: "Apple",
  year: 2011,
};


const student = {
  first: "Jake",
  last: "Sullivan",
};


console.log(computer.name);
console.log(student.first);
console.log(person.score);

const sentence = "Abreviations are quite nifty";
const bio = document.querySelector("bio");
const p = document.createElement("p");
p.innerHTML = sentence;
bio.appendChild(p);
