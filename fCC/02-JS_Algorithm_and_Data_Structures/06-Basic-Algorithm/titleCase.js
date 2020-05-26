function titleCase(str) {
  let splitStr = str.toLowerCase().split(" ");
  let newStr = [];

  for (let i = 0; i < splitStr.length; i++) {
    let initial = splitStr[i][0].toUpperCase();
    let rest = splitStr[i].slice(1);

    newStr.push(initial + rest);
  }

  return newStr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
