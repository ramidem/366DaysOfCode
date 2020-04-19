function myMap(arr, fn) {
  const newArr = [];

  arr.forEach(item => newArr.push(fn(item)));

  return newArr;
}

const addOne = num => num + 1;

const x = [1, 2, 3, 4];

console.log(myMap(x, addOne));
