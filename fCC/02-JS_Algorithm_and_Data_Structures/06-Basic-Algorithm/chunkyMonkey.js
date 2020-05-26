function chunkArrayInGroups(arr, size) {
  let monkeys = [];

  for (let i = 0; i < arr.length; i += size) {
    console.log(monkeys.push(arr.slice(i, i + size)));
  }

  return monkeys;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
