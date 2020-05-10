function multiply(arr, n) {
  if (n <= 0) {
    return n;
  } else {
    return multiply(arr, n - 1) + arr[n - 1];
  }
}

console.log(multiply([1, 2, 3, 4], 1));
