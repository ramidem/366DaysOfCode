let reCriminals = /C+/g;

console.log("C".match(reCriminals));
console.log("CC".match(reCriminals));
console.log("P1P5P4CCCP2P6P3".match(reCriminals));
console.log("".match(reCriminals));
console.log("P1P2P3".match(reCriminals));
console.log(
  "P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3".match(
    reCriminals
  )
);
