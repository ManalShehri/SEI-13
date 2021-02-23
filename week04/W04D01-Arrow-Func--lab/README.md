# JS forEach(), map(), filter() and Arrow Functions



## Arrow Functions .[read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)



-----------------------------------------------------------------
### Challenge: 00-sayHello (example)
### Difficulty: Basic
```js

Prompt:
Write a function called sayHello that returns the string "Hello!".
Examples:

// Your solution for 00-sayHello (example) here:

function sayHello() {
  return 'Hello!'
}

```
### Challenge: 01-addOne
### Difficulty: Basic
```js

Prompt:
Write a function called addOne that takes a single number as an argument and returns that number plus 1.
Examples:
addOne(1) //=> 2 
addOne(-5) //=> -4
```
-----------------------------------------------------------------

### Challenge: 02-addTwoNumbers
### ifficulty: Basic  
```js

Prompt:
Write a function called addTwoNumbers that accepts two numeric arguments and returns the sum of those two numbers.
If either argument is not a Number, return the value of NaN.
Examples:
addTwoNumbers(5, 10) //=> 15
addTwoNumbers(10, -2) //=> 8
addTwoNumbers(0, 0) //=> 0
addTwoNumbers('Hello', 5) //=> NaN
```
-----------------------------------------------------------------

### Challenge: 03-sumNumbers
### Difficulty: Basic 
```js
 
Prompt:
- Write a function called sumNumbers that accepts a single array of numbers and returns the sum of the numbers in the array.
- If the array is empty, return 0 (zero).
Examples:
sumNumbers([10]) //=> 10
sumNumbers([5, 10]) //=> 15
sumNumbers([2, 10, -5]) //=> 7
sumNumbers([]) //=> 0

```

-----------------------------------------------------------------
### Challenge: 04-addList
### Difficulty: Basic
```js

Prompt:
- Write a function called addList that accepts any quantity of numbers as arguments, adds them together and returns the resulting sum.
- Assume all parameters will be numbers.
- If called with no arguments, return 0 (zero).
Examples:
add(1) //=> 1
add(1,50,1.23) //=> 52.23
add(7,-12) //=> -5
```
-----------------------------------------------------------------
### Challenge: 05-hammingDistance
### Difficulty: Intermediate
```js

Prompt:
In information theory, the hamming distance refers to the count of the differences between two strings of equal length.  It is used in computer science for such things as implementing "fuzzy search"  capability.
- Write a function named hammingDistance that accepts two arguments which are both strings of equal length.
- The function should return the count of the symbols (characters, numbers, etc.) at the same position within each string that are different.
- If the strings are not of the same length, the function should return NaN.
Examples:
hammingDistance('abc', 'abc'); //=> 0
hammingDistance('a1c', 'a2c'); //=> 1
hammingDistance('!!!!', '****'); //=> 4
hammingDistance('abc', 'ab'); //=> NaN
```


## JS forEach(), map(), filter(),


## `.forEach()` [read more here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

## `.map()` [read more here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## `.filter()` [read more here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)


## Squares

```js
var nums = [1, 2, 3, 4, 5];
var numsSquared = [];

// Use .map() to get the square of nums and store the value in numsSquared
// numsSquared => [1, 4, 9, 16, 25]
```

## isDivisibleBy3

```js
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var isDivisibleBy3 = [];

// Use .filter() to find out the numbers that are divisible by 3 and store the value in isDivisibleBy3
// isDivisibleBy3 => [3, 6, 9]
```


## Abbreviations
```js
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let dayAbbreviations = [];

// Find the abbreviation of all days and add them to dayAbbreviations array
// dayAbbreviations => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

```

## Capitalize 


```js

const heroes = ['hulk', 'captain america', 'black panther', 'spiderman'];
let capitalizedHeroes = [];

// Capitalize all the strings in the heroes array and store them in the array capitalizedHeroes.
// capitalizedHeroes => ["HULK", "CAPTAIN AMERICA", "BLACK PANTHER", "SPIDERMAN"]

```


## Crazy numbers, again!

```js

// These crazy numbers are now strings 😯 😯  !!  
const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
let totalNumbersUnder4000 = 0;

// Convert numbers from strings to numbers and sum all numbers under 4000 and store them in totalNumbersUnder4000
// totalNumbersUnder4000 => 3802.4078926536
