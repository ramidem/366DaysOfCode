// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    album: "ABBA Gold",
  },
};

function updateRecords(id, prop, value) {
  if (value === "") delete collection[id][prop];

  if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }

  return collection;
}

// console.table(updateRecords(5439, "artist", "ABBA"));

console.log(updateRecords(1245, "tracks", "lovely"));
// console.table(updateRecords(5439, "tracks", "Take a Chance on Me"));
// console.table(updateRecords(2468, "tracks", "Take a Chance on Me"));
// console.table(updateRecords(2468, "tracks", ""));
