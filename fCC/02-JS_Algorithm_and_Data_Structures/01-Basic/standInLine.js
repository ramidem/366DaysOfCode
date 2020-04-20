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
