function confirmEnding(str, target) {
  // return str.split("")[str.length - 1] == target ? true : false;
  return (
    str
      .split("")
      .slice(str.length - target.length)
      .join("") == target
  );
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(
  confirmEnding(
    "Walking on water and developing software from a specification are easy if both are frozen",
    "specification"
  )
);
