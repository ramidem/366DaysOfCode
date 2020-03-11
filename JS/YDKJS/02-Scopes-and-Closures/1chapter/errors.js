var greeting = "hello";

console.log(greeting);

// greeting = .'hi' // unexpected token .

console.log("howdy");

saySomething("hello", "hi");

function saySomething(greet, greet) {
  "use strict";
  // `use strict` does not allow duplicate parameters
  console.log(greet);
}
