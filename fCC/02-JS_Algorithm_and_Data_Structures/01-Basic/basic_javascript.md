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

**Adding a Default Option in Switch Statements**

**Multiple Identical Options in Switch Statements**

**Replacing If Else Chains with Switch**

**Returning Boolean Values from Functions**

**Return Early Pattern for Functions**

**Counting Cards**

**Build JavaScript Objects**

**Accessing Object Properties with Dot Notation**

**Accessing Object Properties with Bracket Notation**

**Accessing Object Properties with Variables**

**Updating Object Properties**

**Add New Properties to a JavaScript Object**

**Delete Properties from a JavaScript Object**

**Using Objects for Lookups**

**Testing Objects for Properties**

**Manipulating Complex Objects**

**Accessing Nested Objects**

**Accessing Nested Arrays**

**Record Collection**

**Iterate with JavaScript While Loops**

**Iterate with JavaScript For Loops**

**Iterate Odd Numbers With a For Loop**

**Count Backwards With a For Loop**

**Iterate Through an Array with a For Loop**

**Nesting For Loops**

**Iterate with JavaScript Do...While Loops**

**Replace Loops using Recursion**

**Profile Lookup**

**Generate Random Fractions with JavaScript**

**Generate Random Whole Numbers with JavaScript**

**Generate Random Whole Numbers within a Range**

**Use the parseInt Function**

**Use the parseInt Function with a Radix**

**Use the Conditional (Ternary) Operator**

**Use Multiple Conditional (Ternary) Operators**

**Use Recursion to Create a Countdown**

**Use Recursion to Create a Range of Numbers**
