function bouncer(arr) {
  let truthy = [];
  for (let index = 0; index < arr.length; index++) {
    if (!!arr[index]) truthy.push(arr[index]);
  }

  return truthy;
}

console.log(bouncer([7, "ate", "", false, 9]));
