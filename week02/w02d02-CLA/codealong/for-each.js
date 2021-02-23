// Starting array
const developers = ["Mike", "Toni", "Ben"];

// Iterate using FOR loop to print 'Hello <name>' for each student in array
for (let dev of developers) {
  console.log("Hello " + dev);
}

// 1.  Iterate using forEach method
// DEMO CODE GOES HERE

function sayHello(person) {
  console.log("Hello " + person);
}

const myResult = developers.forEach(sayHello);

console.log("forEach returns: ", myResult);
