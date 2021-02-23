// Example array
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter for odd elements in an array using predicate function
function isOdd(num) {
  return num % 2;
}
function isEven(num) {
  return !(num % 2);
}

const odds = nums.filter(isOdd);
console.log("odds", odds);

const evens = nums.filter(isEven);
console.log("evens", evens);

// 1.  Filter for odd elements in an array using anonymous function
// LAB CODE GOES HERE

// 2.  Filter for only food that is more than 20 days old
// using a predicate function called isRotten
const fridge = [
  { food: "Carrots", daysInFridge: 32 },
  { food: "Onions", daysInFridge: 23 },
  { food: "Bell Peppers", daysInFridge: 16 },
  { food: "Soda", daysInFridge: 7 },
  { food: "Pizza", daysInFridge: 4 },
  { food: "Cake", daysInFridge: 3 },
];

// LAB CODE GOES HERE

console.log(fridge.filter(isRotten));

function isRotten(element) {
  return element.daysInFridge >= 20;
}
