**Comment Your JavaScript Code**

```js
// in-line comment

/* multi-line
comment */
```

**Declare JavaScript Variables**

```js
var myName;
```

7 JavaScript _Data Types_:

- `string`
- `number`
- `object`
- `boolean`
- `undefined`
- `null`
- `symbol`

**Storing Values with the Assignment Operator**

```js
var a;
var b = 2;

a = 7;
b = a;
```

**Initializing Variables with the Assignment Operator**

```js
var a = 9;
```

**Understanding Uninitialized Variables**

Variables have an initial value of `undefined`. If you do a mathematical operation on an `undefined` variable, your result will be `NaN` (_Not a Number_). Concatenating a string with an `undefined` varaible will return literal _string_ of "`undefined`".

```js
undefined + 10; // undefined
```

**Understanding Case Sensitivity in Variables**

In _camelCase_, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.

```js
var studlyCapVar = 10;
var properCamelCase = "A String";
var titleCaseOver = 9000;
```

**Add Two Numbers with JavaScript**

```js
var sum = 10 + 10; // 20
```

**Subtract One Number from Another with JavaScript**

```js
var difference = 45 - 33; // 12
```

**Multiply Two Numbers with JavaScript**

```js
var product = 8 * 10; // 80
```

**Divide One Number by Another with JavaScript**

```js
var quotient = 66 / 33; // 2
```

**Increment a Number with JavaScript**

```js
var myVar = 87;
myVar++; // 88
```

**Decrement a Number with JavaScript**

```js
var myVar = 87;
myVar--; // 86
```

**Create Decimal Numbers with JavaScript**

```js
var myDecimal = 5.7;
```

**Multiply Two Decimals with JavaScript**

```js
var product = 2.0 * 2.5;
```

**Divide One Decimal by Another with JavaScript**

```js
var quotient = 4.4 / 2.0;
```

**Finding a Remainder in JavaScript**

The _remainder_ operator `%` (modulo) gives the remainder of the division of two numbers.

```js
var odd = 17 % 2; // 1
var even = 48 % 2; // 0
```

**Compound Assignment With Augmented Addition**

```js
var a = 3;
a += 12;
```

**Compound Assignment With Augmented Subtraction**

```js
var a = 11;
a -= 6;
```

**Compound Assignment With Augmented Multiplication**

```js
var a = 5;
a *= 5;
```

**Compound Assignment With Augmented Division**

```js
var a = 48;
a /= 12;
```

**Declare String Variables**

```js
var myFirstName = "Med";
var myLastName = "Aduh";
```

**Escaping Literal Quotes in Strings**

```js
var myStr = 'I am a "double quoted" string inside "double quotes".';
```

      var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

**Quoting Strings with Single Quotes**

```js
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
```

**Escape Sequences in Strings**

```js
var myStr;
myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
```

| Code | Output          |
| ---- | --------------- |
| `\'` | Single Quote    |
| `\"` | Double Quote    |
| `\\` | Backslash       |
| `\n` | Newline         |
| `\r` | Carriage Return |
| `\t` | Tab             |
| `\b` | Word Boundary   |
| `\f` | Form Feed       |

**Concatenating Strings with Plus Operator**

```js
var myStr = "This is the start. " + "This is the end.";
```

**Concatenating Strings with the Plus Equals Operator**

```js
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
```

**Constructing Strings with Variables**

```js
var myName = "Med";
var myStr = "My name is " + myName + " and I am well!";
```

**Appending Variables to Strings**

```js
var someAdjective = "fun";
var myStr = "Learning to code is ";
myStr += someAdjective;
```

**Find the Length of a String**

```js
var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;
```

**Use Bracket Notation to Find the First Character in a String**

```js
var firstLetterOfLastName = lastName[0];
```

**Understand String Immutability**

`String` values are _immutable_ -- they can not be altered once created.

```js
var myStr = "Bob";
myStr[0] = "J"; // will not work

// has to be
myStr = "Job";
```

**Use Bracket Notation to Find the Nth Character in a String**

```js
var thirdLetterOfLastName = lastName[2];
```

**Use Bracket Notation to Find the Last Character in a String**

```js
var lastLetterOfLastName = lastName[lastName.length - 1];
```

**Use Bracket Notation to Find the Nth-to-Last Character in a String**

```js
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
```

**Word Blanks**

```js
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks =
  "a " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb;
```

**Store Multiple Values in one Variable using JavaScript Arrays**

```js
var myArray = ["apple", 2];
```

**Nest one Array within Another Array**

```js
var myArray = [
  ["apple", 2],
  ["banana", 3],
];
```

**Access Array Data with Indexes**

```js
var myData = myArray[0];
```

**Modify Array Data With Indexes**

```js
myArray[0] = 45;
```

**Access Multi-Dimensional Arrays With Indexes**

```js
var theArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

var theData = myArray[2][1];
```

**Manipulate Arrays With push()**

`.push()` takes one or more _parameters_ and "pushes" them onto the end of the array.

```js
var myArray = [
  ["John", 23],
  ["cat", 2],
];

myArray.push(["dog", 3]);
```

**Manipulate Arrays With pop()**

`.pop()` removes the last element from an array and returns that element.

```js
var removedFromMyArray = myArray.pop();
```

**Manipulate Arrays With shift()**

`.shift()` removes the first element instead of the last (`.pop()`)

```js
var removedFromMyArray = myArray.shift();
```

**Manipulate Arrays With unshift()**

`.unshift()` adds element to the beginning of the array.

```js
myArray.unshift(["Paul", 35]);
```

**Shopping List**

```js
var myList = [
  ["item 1", 1],
  ["item 2", 2],
  ["item 3", 3],
  ["item 4", 4],
  ["item 5", 5],
];
```

**Write Reusable JavaScript with Functions**

In JavaScript, we can divide up our code into reusable parts called _functions_.

```js
function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();
```

**Passing Values to Functions with Arguments**

_Parameters_ (_arguments_) are variables that act as placeholders for the values that are to be input to a function when it is called.

```js
function functionWithArgs(a, b) {
  console.log(a + b);
}

functionWithArgs(1, 2);
```

**Global Scope and Functions**

_Scope_ refers to the visibility of the variables. Variables declared outside any functions have _Global Scope_.

Always declare variables with `var`.

```js
var myGlobal = 10; // Global

function fun1() {
  oopsGlobal = 5; // Global, no var declaration
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```

**Local Scope and Functions**

Variables declared within a function, as well as the function parameters have _local scope_.

```js
function myLocalScope() {
  "use strict";
  var myVar;
  console.log(myVar);
}

myLocalScope();

console.log(myVar); // ReferenceError: myVar is not defined
```

**Global vs. Local Scope in Functions**

It is possible to have both _local_ and _global_ variables with the same name. _local_ variables will precedence.

```js
var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}

myOutfit(); // "sweater"
```

**Return a Value from a Function with Return**

`return` statement sends a value back out of a function.

```js
function timesFive(a) {
  return a * 5;
}

timesFives(1); // 5
```

**Understanding Undefined Value returned from a Function**

Function will return `undefined` if there is no `return` statement.

```js
var sum = 0;

function addFive() {
  sum = sum + 5;
}

addFive();
```

**Assignment with a Returned Value**

Assign a return value to a variable.

```js
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
```

**Stand in Line**

In Computer Science, a _queue_ is an abstract _Data Structure_ where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

```js
// add the `item` to the end of the array
// return the removed first element
function nextInLine(arr, item) {
  arr.push(item);
  var removed = arr.shift();
  return removed;
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
```

**Understanding Boolean Values**

On and off switch. `true` or `false`.

```js
function welcomeToBooleans() {
  return true;
}
```

**Use Conditional Logic with If Statements**

The keyword `if` tells JavaScript to execute the code in the curly braces under certain conditions (`Boolean`), defined in the parentheses.

```js
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
```

**Comparison with the Equality Operator**

```js
1 == 1; // true
1 == 2; // false
1 == "1"; // true
"3" == 3; // true
```

**Comparison with the Strict Equality Operator**

```js
3 === 3; // true
3 === "3"; // false
```

**Practice comparing different values**

```js
// Setup
function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
```

**Comparison with the Inequality Operator**

```js
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
```

**Comparison with the Strict Inequality Operator**

```js
// Setup
function testStrictNotEqual(val) {
  if (val !== 17) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
```

**Comparison with the Greater Than Operator**

```js
5 > 3; // true
7 > "3"; // true
2 > 3; // false
"1" > 9; // false
```

**Comparison with the Greater Than Or Equal To Operator**

```js
6 >= 6; // true
7 >= "3"; // true
2 >= 3; // false
"7" >= 9; // false
```

**Comparison with the Less Than Operator**

```js
2 < 5; // true
"3" < 7; // true
5 < 5; // false
3 < 2; // false
"8" < 4; // false
```

**Comparison with the Less Than Or Equal To Operator**

```js
4 <= 5; // true
"7" <= 7; // true
5 <= 5; // true
3 <= 2; // false
"8" <= 4; // false
```

**Comparisons with the Logical `&&` Operator**

Both sides are `true`.

```js
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}

testLogicalAnd(10);
```

**Comparisons with the Logical `||` Operator**

Either side is `true`.

```js
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}

testLogicalOr(15);
```

**Introducing Else Statements**

Execute alternate block of code.

```js
function testElse(val) {
  var result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}

testElse(4);
```

**Introducing Else If Statements**

```js
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

testElseIf(7);
```

**Logical Order in If Else Statements**

```js
function orderMyLogic(val) {
  if (val > 10) {
    return "Greater than or equal to 10";
  } else if (val > 5) {
    return "Less than 10";
  } else {
    return "Less than 5";
  }
}

orderMyLogic(7);
```

**Chaining If Else Statements**

```js
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}

testSize(7);
```

**Golf Code**

|   Strokes    | Return          |
| :----------: | --------------- |
|     `1`      | "Hole-in-one!"  |
| `<= par - 2` | "Eagle"         |
|  `par - 1`   | "Birdie"        |
|    `par`     | "Par"           |
|  `par + 1`   | "Bogey"         |
|  `par + 2`   | "Double Boogey" |
| `>= par + 3` | "Go Home!"      |

```js
var names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
}

console.log(golfScore(5, 4));
```

**Selecting from Many Options with Switch Statements**

A `switch` statement tests a value and can have many _case_ statements which define various possible values. Statements are executed from the first matched `case` value until a `break` is encountered.

```js
var answer = "";
switch (val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
}
```

**Adding a Default Option in Switch Statements**

`default` will execute if no matching `case` statements are found.

```js
var answer = "";
switch (val) {
  case "a":
    answer = "apple";
    break;

  case "b":
    answer = "bird";
    break;
  case "c":
    answer = "cat";
    break;
  default:
    answer = "stuff";
}
```

**Multiple Identical Options in Switch Statements**

```js
var answer = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    answer = "Low";
    break;
  case 4:
  case 5:
  case 6:
    answer = "Mid";
    break;
  case 7:
  case 8:
  case 9:
    answer = "High";
    break;
}
```

**Replacing If Else Chains with Switch**

```js
var answer = "";

// if (val === "bob") {
//   answer = "Marley";
// } else if (val === 42) {
//   answer = "The Answer";
// } else if (val === 1) {
//   answer = "There is no #1";
// } else if (val === 99) {
//   answer = "Missed me by this much!";
// } else if (val === 7) {
//   answer = "Ate Nine";
// }

switch (val) {
  case "bob":
    answer = "Marley";
    break;
  case 42:
    answer = "The Answer";
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99:
    answer = "Missed me by this much!";
    break;
  case 7:
    answer = "Ate Nine";
    break;
  default:
    answer = "";
}
```

**Returning Boolean Values from Functions**

```js
function isLess(a, b) {
  // Only change code below this line
  return a < b;
  // Only change code above this line
}

isLess(10, 15);
```

**Return Early Pattern for Functions**

When a `return` statement is reached, the execution of the current function stops and control returns to the calling location.

```js
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);
```

**Counting Cards**

| Count Change |          Card          |
| :----------: | :--------------------: |
|      +1      |     2, 3, 4, 5, 6      |
|      0       |        7, 8, 9         |
|      -1      | 10, 'J', 'Q', 'K', 'A' |

```js
var count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      count += 0;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
```

**Build JavaScript Objects**

`Object` class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the `Object()` constructor or the object initializer / literal syntax. -- [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

```js
var myDog = {
  name: "Browny",
  legs: 4,
  tails: 1,
  friends: ["Red", "Pink"],
};
```

**Accessing Object Properties with Dot Notation**

```js
var testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
  "the drink": "water",
  "an entree": "hamburger",
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
```

**Accessing Object Properties with Bracket Notation**

```js
var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];
```

**Accessing Object Properties with Variables**

```js
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};

var playerNumber = 16;
var player = testObj[playerNumber];
```

**Updating Object Properties**

```js
var myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDog.name = "Happy Coder";
```

**Add New Properties to a JavaScript Object**

```js
myDog.bark = "woof!";
```

**Delete Properties from a JavaScript Object**

```js
delete myDog.tails;
```

**Using Objects for Lookups**

```js
// Setup
function phoneticLookup(val) {
  var result = "";

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };

  result = lookup[val];
  return result;
}

phoneticLookup("charlie");
```

**Testing Objects for Properties**

`.hasOwnProperty(prop)` method of objects determine if that object has the given property name. Returns `true` or `false`

```js
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  }
  return "Not Found";
}
```

**Manipulating Complex Objects**

Object is flexible that it can contain _`strings`_, _`numbers`_, _`booleans`_, _`arrays`_, _`functions`_, and _`objects`_.

```js
var myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
];

myMusic[1] = {
  artist: "Empoy",
  title: "Sukang Itim",
  release_year: 2000,
  formats: ["CD", "8T", "LP"],
};
```

**Accessing Nested Objects**

```js
var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

var gloveBoxContents = myStorage.car.inside["glove box"];
```

**Accessing Nested Arrays**

```js
var myPlants = [
  {
    trees1: ["rose", "tulip", "dandelion"],
  },
  {
    trees2: ["fir", "pine", "birch"],
  },
];

var secondTree = myPlants[1].trees2[1];
```

**Record Collection**

```js
// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    album: "ABBA Gold",
  },
};

function updateRecords(id, prop, value) {
  if (value === "") delete collection[id][prop];

  if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }

  return collection;
}

console.log(updateRecords(1245, "tracks", "lovely"));
```

**Iterate with JavaScript While Loops**

`while` loop runs "while" a specified condition is true and stops once that condition is no longer true

```js
var myArray = [];
var counter = 0;

while (counter < 5) {
  myArray.push(counter);
  counter++;
}
```

**Iterate with JavaScript For Loops**

`for` loops run "for" a specific number of times

For loops are declared with three optional expressions separated by semicolons:

`for ([initialization]; [condition]; [final-expression])`

```js
var myArray = [];

for (var i = 1; i < 6; i++) {
  myArray.push(i);
}
```

**Iterate Odd Numbers With a For Loop**

```js
var myArray = [];

for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}
```

**Count Backwards With a For Loop**

```js
var myArray = [];

for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
```

**Iterate Through an Array with a For Loop**

```js
var myArr = [2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
```

**Nesting For Loops**

```js
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
```

**Iterate with JavaScript Do...While Loops**

`do...while` will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true

```js
var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 11);
```

**Replace Loops using Recursion**

_"Recursion is a function that calls itself until it doesn't."_ -- [mpj](https://youtu.be/k7-N8R0-KY4)

```js
function multiply(arr, n) {
  if (n <= 0) {
    return n;
  } else {
    return multiply(arr, n - 1) + arr[n - 1];
  }
}

console.log(multiply([1, 2, 3, 4], 1));
```

**Profile Lookup**

```js
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  var msg = "";
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName == name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
    msg = "No such contact";
  }

  return msg;
}

console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Sherlock", "likes"));
```

**Generate Random Fractions with JavaScript**

The `Math.random()` function returns a floating-point, pseudo-random number in the range of 0 to less than 1 (inclusive of 0, but not 1) -- [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

```js
function randomFraction() {
  return Math.random();
}
```

**Generate Random Whole Numbers with JavaScript**

The `Math.floor()` function returns the largest integer less than or equal to a given number.

```js
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
```

**Generate Random Whole Numbers within a Range**

```js
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
```

**Use the parseInt Function**

The `parseInt()` function parses a string and returns an integer.

```js
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");
```

**Use the parseInt Function with a Radix**

`radix` | _Optional_

- An integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the string. Be careful—this does not default to 10!

```js
function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");
```

**Use the Conditional (Ternary) Operator**

The _conditional operator_, also called _ternary operator_, can be used as one line if-else expression.

```js
function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);
```

**Use Multiple Conditional (Ternary) Operators**

```js
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

checkSign(10);
```

**Use Recursion to Create a Countdown**

```js
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
console.log(countdown(5));
```

**Use Recursion to Create a Range of Numbers**
