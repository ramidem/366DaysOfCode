function largestOfFour(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (subArr < arr[i][j]) {
        subArr = arr[i][j];
      }
    }
    newArr[i] = subArr;
  }
  return newArr;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

console.log(-3 > -10);
