## Overview, JavaScript

---

## JavaScript, ES6

**ES5, ES6, ES2016, ES2017, ES.Next**

- ECMAScript vs JavaScript
- What do most environments support?
- Transpilers (Babel, Typescript, CoffeScript, etc.)
- Which syntax should I use?

**Closures**

- Functions that refer to variables declared by parent function still have access to those variables
- Possible because of JavaScript scoping

**IIFE (Immediately Invoked Function Expression)**

- A function expression that gets invoked immediately
- Creates Closure
- Does not add to or modify global object

**First-Class Functions**

- Functions are treated the same way as any other value

  - Can be assigned to variables, array values, object values
  - Can be passed as arguments to other functions
  - Can be returned from other functions

- Allows for the creation of higher-order functions

  - Either takes one or more functions as arguments or returns a function
  - map(), filter(), reduce()

**Synchronous? Async? Single-Threaded?**

- JavaScript is a single-threaded, synchronous language
- A function that takes a long time to run will cause a page to become unresponsive
- JavaScript also has functions that act asynchronously
- How can it be both synchronous and asynchronous?

**Asynchronouse JavaScript**

- _Execution Stack_

  - Functions invoked by other functions get added to the _call stack_
  - When functions complete, they are removed from the stack and the frame below continues executing

- _Browser APIs_
- _Function Queue_
- _Event Loop_
- _Asynchronous Functions_

  - `setTImeout()`
  - `XMLHttpRequest(), jQuery.ajax(), fetch()`
  - Database Calls

- _Callbacks_

  - Control flow with asynchronous calls
  - Execute function once asynchronous call returns value

    - Program does not have to halt and wait for value

- _Promises_

  - Alleviate "callback hell"
  - Allows you to write code that assumes a value is returned withing a success function
  - Only need a single error handler

- _Async/Await_

  - Introduced in ES2017
  - Allows to write async code as if it were synchronous

- _`this`_

  - Refers to an object that's set at the creation of a new execution context (function invocation)
  - In the global execution context, refers to global context
  - If the function is called as a method of an object, `this` is bound to the object the method is called on

- _Browsers and the DOM_

  - Browsers render HTML to a webpage
  - HTML defines a tree-like structure
  - Browsers construct this tree in memory before painting the page
  - Tree is called the Document Object Model
  - The DOM can be modified using JavaScript

---

[ ] React, Props, State
[ ] React Native
[ ] Lists, User Input
[ ] User Input, Debugging
[ ] Navigation
[ ] Data
[ ] Expo Components
[ ] Redux
[ ] Async Redux, Tools
[ ] Performance
[ ] Deploying, Testing
