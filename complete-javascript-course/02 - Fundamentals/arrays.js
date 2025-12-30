const friends = ["Michael", "Steven", "Peter"]

const newLength = friends.push("Jay") // Add element

friends.unshift("John") //Add to the begining

const popped = friends.pop(); // removes the last one and returns it

const shifted = friends.shift(); // removes first one and returns it

console.log(friends.indexOf("Steven")) // find index

console.log(friends.includes("Steven")); // checks if "Steven" is in array and returns true or false

