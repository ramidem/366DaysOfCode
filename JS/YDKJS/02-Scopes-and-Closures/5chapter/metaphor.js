// Variable Hoisting

// greeting = "hello";
// console.log(greeting); // hello
// var greeting = "howdy";

var greeting; // hoisted declaration
greeting = "hello"; // the original line 1
console.log(greeting); // hello
greeting = "howdy"; // var is gone

// Function Hoisting
// functions are hoisted first followed by Variables

// studentName = "med";
// ola();

// function ola() {
//   console.log(`hello, ${studentName}`);
// }

// var studentName;

function ola() {
  console.log(`hello, ${studentName}`);
}
var studentName;
studentName = "med";
ola();

// RE-DECLARATION?

// pointless...
// var horse = "horace";
// console.log(horse);

// var horse;
// console.log(horse);

// ...because
var horse = "horace";
var horse;

horse = "horace";
console.log(horse);
console.log(horse);

// with let
let cat = "meow";
console.log(cat);
// let cat = "ming"; // SyntaxError
