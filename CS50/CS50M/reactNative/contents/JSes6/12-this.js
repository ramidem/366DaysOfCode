const person = {
  name: "Med",
  age: 12,
  greet: function() {
    console.log(`hello, ${this.name}!`);
  }
};

person.greet(); // hello, med!

// key name is not defined outside person
const greet = person.greet;
greet(); // hello, undefined!

const friend = {
  name: "meh"
};

friend.greet = person.greet;
friend.greet();
