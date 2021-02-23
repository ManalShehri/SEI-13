// Using push and unshift, make this array contain the numbers from zero through seven:
let arr = [2, 3, 4];

 // your code here
arr.unshift(1);
arr.push(5);
arr.push(6);
arr.push(7);
// arr; // => [0, 1, 2, 3, 4, 5, 6, 7]
console.log(arr)
// What is returned by push? Before throwing this into the console, form a hypothesis about what you think the return value will be:
let arr2 = [5, 7, 9];
// arr.push(6); // returns ???
console.log(arr2.push(6)) // that will return the index of last item in the array after push the element 
// Starting with an empty array called rainbowColors:
 
var rainbowColors = []
// Add "orange" to the end of the array
rainbowColors.push("orange")
// Add "red" to the start of the array
rainbowColors.unshift("red")
// Add "yellow" to the end
rainbowColors.push("yellow")
// Add "green", "blue", "indigo", and "violet" to the end of the array'
// Try and do this using one method
rainbowColors.push("green" ,"blue", "indigo" ,"violet")

// Print the length of the array
console.log(rainbowColors.length)
// Print the second item
console.log(rainbowColors[1])
// Print the last item (make this flexible/dynamic!)
console.log(rainbowColors[rainbowColors.length -1])
// Print the index of the string "blue"
console.log(rainbowColors.indexOf("blue"))
// Find out the difference between .slice and .splice
// https://www.tothenew.com/blog/javascript-splice-vs-slice/

// Create an array called twoColors using one method - don't change the rainbowColors array! Essentially pull two colors out of the array (say, between the index of 1 and 3)
let twoColors = rainbowColours.slice(1, 3);
console.log(twoColors);

// var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];

nums.splice(3, 3);
console.log(nums);


// Starting with this array var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, remove the duplicates destructively using slice or splice (whichever one is appropriate) 