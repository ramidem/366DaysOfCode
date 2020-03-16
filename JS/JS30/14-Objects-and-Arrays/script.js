// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

const players = ["Wes", "Sarah", "Ryan", "Poppy"];

const team = players;
console.log(players, team);
team[3] = "Lex";
console.log(team, players);

const team2 = players.slice();
console.log(team2);
team2[3] = "David";
console.log(team2);
console.log(team);
console.log(players);

const team3 = [].concat(players);
console.log(team3);

// or use the new ES6 Spread
const team4 = [...players];
console.log(team4);

const team5 = Array.from(players);
console.log(team5);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80
};
console.log(person);

// and think we make a copy:
const captain = person;
captain.age = 90;
console.log(captain);
console.log(person);

// how do we take a copy instead?
const person2 = {
  name: "Med Aduh",
  age: 30
};
console.log(person2);

const med = Object.assign({}, person2, { age: 25 });
console.log(med);
console.log(person2);

// We will hopefully soon see the object ...spread
const cap3 = { ...person };
console.log(cap3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
