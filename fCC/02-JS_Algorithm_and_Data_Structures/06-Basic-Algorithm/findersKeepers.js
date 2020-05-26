function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }

  return undefined;
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
console.log(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0));
