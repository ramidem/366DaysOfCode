function truncateString(str, num) {
  return num >= str.length ? str : str.split("").slice(0, num).join("") + "...";
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length
  )
);
