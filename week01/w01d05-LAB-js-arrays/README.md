[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Arrays


### Learning Objectives

- Practice using arrays to solve problems

## Getting Started

- Use or Create the file `afternoon_lab_solutions.js` to write arrays.
<!---, loops, `if`, or `if, else` statements to complete the following questions. --->
- Refer back to your class notes from today if you need help.

## Exercises

### Research Array Methods :books:

#### ARRAY METHODS: Adding and Removing Elements

#### Group Activity

- Let's make an array together called `favMovies` and put everyone's favorite movie in there
- We'll share the array in slack and break off into small groups for about 10 minutes and each group will research and give us an explaination and a code example of the following methods

#### Methods - each group gets one

1. index of
1. push
1. pop
1. reverse
1. unshift
1. shift
1. slice
1. splice
1. sort
1. Length

### Array Practice

1. Using `push` and `unshift`, make this array contain the numbers from zero through seven:

```js
let arr = [2, 3, 4];

// your code here

arr; // => [0, 1, 2, 3, 4, 5, 6, 7]
```

2. What is _returned_ by `push`? Before throwing this into the console, form a hypothesis about what you think the return value will be:

```js
let arr = [5, 7, 9];
arr.push(6); // returns ???
```

3.  Starting with an empty array called `rainbowColors`:

    - Add "orange" to the end of the array
    - Add "red" to the start of the array
    - Add "yellow" to the end
    - Add "green", "blue", "indigo", and "violet" to the end of the array
      - Try and do this using _one_ method
    - Print the length of the array
    - Print the second item
    - Print the last item (make this flexible/dynamic!)
    - Print the index of the string "blue"

1.  Find out the difference between `.slice` and `.splice`
    - Create an array called `twoColors` using one method - don't change the `rainbowColors` array! Essentially pull two colors out of the array (say, between the index of 1 and 3)
    - Starting with this array `var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];`, remove the duplicates _destructively_ using _slice_ or _splice_ (whichever one is appropriate)

---

### Array Resources

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#
- https://javascript.info/array
- https://javascript.info/array-methods

---

_Copyright 2020, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_

