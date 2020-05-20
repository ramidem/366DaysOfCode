console.log("titanic".match(/t[a-z]*i/)); // "titani"

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
console.log(result);

function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 0; i <= len - 1; i++) {
    // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();
