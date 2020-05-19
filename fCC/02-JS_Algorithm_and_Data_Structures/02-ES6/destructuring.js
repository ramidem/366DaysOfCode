const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// use destructuring assignment to extract values from objects
const { today, tomorrow } = HIGH_TEMPERATURES;

// use destructuring assignment to assign variables from objects
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// use destructuring assignment to assign variables form nested objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

// const {
//   today: { low: lowToday, high: highToday },
// } = LOCAL_FORECAST;

// use destructuring assignment to assign variables form arrays
let a = 8,
  b = 6;
[b, a] = [a, b];

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  "use strict";
  // Only change code below this line
  const [a, b, ...arr] = list;
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);

console.log(arr);

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

const half = ({ max, min }) => (max + min) / 2.0;

console.log(half(stats));

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"],
};
function makeList(arr) {
  "use strict";

  // Only change code below this line
  const resultDisplayArray = arr.map((el) => {
    return `<li class="text-warning">${el}</li>`;
  });
  // Only change code above this line

  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);

const createPerson = (name, age, gender) => {
  "use strict";
  return {
    name,
    age,
    gender,
  };
};

// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
