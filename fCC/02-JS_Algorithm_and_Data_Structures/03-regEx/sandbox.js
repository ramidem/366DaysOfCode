console.log("titanic".match(/t[a-z]*i/)); // "titani"

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
console.log(result);
