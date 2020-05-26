function mutation(arr) {
  let base = arr[0].toLowerCase().split("");
  let checkForLetters = arr[1].toLowerCase().split("");

  for (let i = 0; i < checkForLetters.length; i++) {
    const cFL = checkForLetters[i];
    if (base.indexOf(cFL) < 0) {
      return false;
    }
  }

  return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["alien", "line"]));
