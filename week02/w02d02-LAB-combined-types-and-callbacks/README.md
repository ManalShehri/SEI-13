
[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Combined Datatypes & Array Callbacks Lab

#### Learning Objectives

- Practice combining datatypes one level deep
- Practice combining datatypes more than one level deep
- Practice using array methods with callbacks

#### Prerequisites

- JavaScript fundamentals
- Javascript basics of Arrays, Objects and Functions
- Introduction to callbacks

---

## Getting Started

1. Touch a file for each section - there are two sections - `combining_datatypes` and `arrays_w_callbacks`



## Deliverables

Two files answering the questions in each section

## Technical Requirements
1. JavaScript files must run without errors (comment out things that don't work and leave a comment for the hw grader)

### Section 1 Combining Datatypes


# Combining datatypes

## Methods

Given the following object, call the jump method

```javascript
const person = {
    jump: () => {
        console.log('fly!');
    }
};
```

Call the drive method

```javascript
const generateCar = ()=>{
    return {
        drive(){
            console.log("Vroom");
        }
    }
}
```

Log the message attribute

```javascript
const account = {
    tweet: () => {
        return {
            message: "fun"
        }
    }
}
```

Log the second element in the array

```javascript
const me = {
    foo: () =>{
        return {
            array: [2.5, 7, true]
        }
    }
}
```

Create a data structure such that the following code logs "boat":

```javascript
console.log(baz.foo().matt.travel);
```

Create a data structure such that the following code executes without error:

```javascript
factory.createCar().startEngine();
```

Run the inner function:

```javascript
const matt = {
    blink: () =>{
        return ()=>{
            console.log('hi')
        }
    }
}
```


Call the funStuff() method:

```javascript
const list = [
    'dogs',
    false,
    3.5,
    ()=>{
        return {
            funStuff: ()=>{
                console.log('yaaassss');
            }
        }
    }
];
```

Call the most inner function:

```javascript
const foo = [
    'asdfasdf',
    'matt',
    false,
    6,
    ()=>{
        return ()=>{
            console.log('yes!');
        }
    },
    {
        dog:'blue'
    }
];
```

# Hungry For More
## Callbacks and methods

Call the `someMethod` function, passing in `myFunc`.  It should log `About to invoke the callback` and then `I have been called!`

```javascript

const foo = {
    someMethod: (callback)=>{
        console.log('About to invoke the callback');
        callback();
    }
}

const myFunc = ()=>{
    console.log('I have been called!');
}
```

Alter the following code so that `myFunc` properly logs the `height` property of `foo`

```javascript
const foo = {
    height:5,
    someMethod: (callback)=>{
        callback();
    }
}

const myFunc = (param)=>{
    console.log(param);
}
```

Create a method called combineColor on the shirtColor object that combines all the elements of the color array into a string

```
const shirtColor = {
  color: ['red', 'blue', 'green', 'white', 'pink'],
}
```
Expected Output:  ```"red, green, white, pink"```


**Model a Vending Machine**
Model a vending machine

- a vending machine is an object
- it has an array of snacks (make 3 snacks)
- snacks are objects that have a name and a price
- a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
- Be able to call vendingMachine.vend() with a valid integer to return a snack


### Section 2: Array Methods with Callbacks

A few array methods use callbacks. For example `.map` - `.map` takes each element of an array and does something to it and returns a new arrays.

But what should it do? Multiply everything by 5? Capitalize everything? If `.map` had a hard-coded thing it always did with an array, it wouldn't be very flexible.

By allowing a callback to determine what happens to each array element we get a lot of flexibility and we can do some really powerful things.

Two arrays to work with

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

```

The first question is for the numbers array. The second question is for the words array.

You don't have to write an answer to the thought questions.

#### Every

1. Determine if every number is greater than or equal to 0
1. determine if every word shorter than 8 characters

#### Filter

1. filter the array for numbers less than 4
1. filter words that have an even length

#### Find

1. Find the first value divisible by 5
1. find the first word that is longer than 5 characters

#### Find Index
1. find the index of the first number that is divisible by 3
1. find the index of the first word that is less than 2 characters long

#### For Each
1. console.log each value of the nums array multiplied by 3
1. console.log each word with an exclamation point at the end of it

**Thought Questions**
- What happened to the original array?
- Can you store the values from a `forEach` method in a new array?

#### Map
1.  make a new array of each number multiplied by 100
1. make a new array of all the words in all uppercase

**Thought Questions**
- What happened to the original array?
- Can you store the values from a `map` method in a new array?

#### Some
- Find out if some numbers are divisible by 7
- Find out if some words have the letter `a` in them


### Hungry for More

#### Reduce
- Add all the numbers in the array together using the `reduce` method
- concatenate all the words using reduce

**Thought Questions**
- What happened to the original array?

#### Sort
- Try to sort without any arguments, do you get what you'd expect with the numbers array?
- Try to sort without any arguments, do you get what you'd expect with the words array?
- Sort the numbers in ascending order
- Sort the numbers in descending order
- Sort the words in ascending order
- Sort the words in descending order

**Thought Questions**
- What happened to the original array?

### Array Methods Challenge Problems

#### isPanagram

Using the following array - test whether each letter a-z (case insensitive) is used at least once

```js
const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']
```


#### Working with data

- filter for products with a price that is less than 10, using the array below:
- sort alphabetically by product name

```js
const products = [
      {
        "name": "allen wrench",
        "price": 2.99,
        "description": "handy tool"
      },
      {
        "name": "cornucopia",
        "price": 5.99,
        "description": "festive holiday decoration"
      },
      {
        "name": "banana",
        "price": 0.99,
        "description": "full of potassium"
      },
      {
        "name": "guillotine (cigar)",
        "price": 10.59,
        "description": "behead your stub"
      },
      {
        "name": "jack-o-lantern",
        "price": 3.99,
        "description": "spooky seasonal fun"
      },
      {
        "name": "doggie treat (box)",
        "price": 5.99,
        "description": "fido loves 'em"
      },
      {
        "name": "egg separator",
        "price": 3.99,
        "description": "it separates yolks from whites"
      },
      {
        "name": "LED lightbulb",
        "price": 6.55,
        "description": "It's super-efficient!"
      },
      {
        "name": "owl pellets",
        "price": 3.99,
        "description": "Don't ask what they used to be."
      },
      {
        "name": "flag",
        "price": 5.99,
        "description": "catches the breeze"
      },
      {
        "name": "hair brush",
        "price": 6.99,
        "description": "fine boar bristles"
      },
      {
        "name": "iridium (one gram)",
        "price": 19.36,
        "description": "corrosion-resistant metal"
      },
      {
        "name": "quark",
        "price": 0.01,
        "description": "Very small"
      },
      {
        "name": "turtleneck",
        "price": 19.99,
        "description": "available in black and slightly-darker black"
      },
      {
        "name": "kaleidoscope",
        "price": 8.25,
        "description": "tube with moving plastic pieces inside"
      },
      {
        "name": "mitt (leather)",
        "price": 15,
        "description": "regulation sized"
      },
      {
        "name": "nothing",
        "price": 10,
        "description": "Hey, if you pay us, we won't ask any questions."
      },
      {
        "name": "violin",
        "price": 2000,
        "description": "Talk about a JS fiddle..."
      },
      {
        "name": "yoyo",
        "price": 1,
        "description": "We had to pull some strings to get this one in."
      },
      {
        "name": "pincushion",
        "price": 1.99,
        "description": "You'll get 'stuck' on it"
      },
    ]
```

   ---

   *Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*


   
