function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice();

  for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    newArr.splice(n, 0, element);
    n++;
  }

  return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
