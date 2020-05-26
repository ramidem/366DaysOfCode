function getIndexToIns(arr, num) {
  let theArr = arr;
  arr.push(num);

  let sorted = sortArray(theArr);

  return sorted.indexOf(num) >= 0 ? sorted.indexOf(num) : 0;
}

// https://stackoverflow.com/questions/38331143/sort-an-array-containing-numbers-using-for-loop
function sortArray(arr) {
  let output = [];
  let inserted;

  for (let i = 0; i < arr.length; i++) {
    inserted = false;
    for (let j = 0; j < output.length; j++) {
      if (arr[i] < output[j]) {
        inserted = true;
        output.splice(j, 0, arr[i]);
        break;
      }
    }

    if (!inserted) output.push(arr[i]);
  }

  return output;
}

console.log(sortArray([1, 23, 45, 21, 546, 43]));

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([], 1));
