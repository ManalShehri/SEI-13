[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)
# Functions
## Learning Objectives

- Recognize the parts of a function
- Write a function in JavaScript using a declaration and an expression
- State the difference between a function's output and side effects
- Differentiate between referencing and invoking a function
- Define hoisting
- Describe scope and how it governs how data is able to be accessed in code
- 

### ES6 Features

#### Arrow Functions

Following the release of ECMAScript 6 (ES6) in 2015, anonymous functions can be
written as "arrow functions", a syntax adapted from CoffeeScript.

```js
var square = function(num1) {
  // function expression
  return num1 * num1;
};
```

What does this look like in ES6?

```js
// 1. drop the function keyword
// 2. add a fat arrow between the parentheses and opening curly brace

const square = (num1) => {
  return num1 * num1;
};
```

Arrow functions with a "concise" function body (no brackets and on one line)
have "implicit return". This means you can leave out the `return` keyword and it
still returns.

```js
// 3. if the function only returns one value, drop the curly braces and return keyword

const square = (num1) => num1 * num1;
```

And lastly, to simplify it further..

```js
// 4. if the function only takes one parameter, drop the parentheses

const square = num1 => num1 * num1;
```

## Scope

### What Is Scope?

In **real life**, your "scope" is what your eyes can see from wherever you're
standing.

In **Javascript** scope is where a variable can be referenced/used (i.e., all variables that can be accessed from a given line of code).

#### Quick Example

Here's a code snippet that demonstrates some of Javascript's fundamental rules
of scope...

```js
var color;

function getColor() {
  color = "red";
}

getColor();
console.log(color); // What should we see in the console?
```

Let's see what happens if we add the `var` keyword...

```js
function getAnotherColor() {
  var anotherColor = "green";
}

getAnotherColor();
console.log(anotherColor); // What should we see in the console?
```

#### Rules of Scope in JS

In Javascript, there are two types of scope: **global scope** and **local
scope**.

There are five rules to remember about scope in JS...

1. Variables created **without** the `var`, `let`, or `const` keywords, no
   matter where in a program, are placed in the global scope. :x:
2. Variables created **with** the `var`, `let`, or `const` keywords are created
   in the current local scope.
3. All functions create a new local scope.
4. The current scope includes all outer (enclosing) scopes.
5. Variables created with `let` or `const` keywords have **block** scope.

> One consequence of rule 3 is that variables defined outside of any function
> are inherently global if the `var` keyword is used (`let` and `const` prevent pollution of the 
global scope).

Another way to say this...

- **Local variables** defined inside a function cannot be accessed from anywhere
  outside of the function, because the variable is defined only within the scope
  of the function.
- However, a function can access all variables and functions defined inside the
  scope in which it is defined (which includes all outer scopes).

### We Do: A More Complex Example

Let's walk through this example in two steps:

1. Identify and diagram the scope of each variable.
2. Determine whether each `console.log` will error out or not.

```js
teamName = "Giraffes"; // What scope is this?
var teamCity = "Sioux Falls"; // What scope is this?

function playBaseball() {
  console.log("From " + teamCity + "..."); // Does this work?
  console.log("Welcome the " + teamName + "!"); // Does this work?

  if (teamCity === "Sioux Falls") {
    const pitcherName = "Meg"; // What scope is this?
  }
  var batterName = "Perry"; // What scope is this?

  console.log('Batter from inside the function', batterName); // Does this work?
  console.log('Pitcher from inside the function', pitcherName); // Does this work?
}

playBaseball();

console.log(teamCity); // Does this work?
console.log(teamName); // Does this work?

console.log(batterName); // Does this work?
console.log(pitcherName); // Does this work?

```

<details>
  <summary><strong>List of scopes for this example...</strong></summary>

> `teamName` - global (no var)  
> `teamCity` - global (`var` not in a function)  
> `pitcherName` - block (no because const has block scope)  
> `batterName` - local to `playBaseball`

</details>

### More on Hoisting

#### Functions

A Javascript feature that may impact scope is **hoisting**. This applies to
Javascript functions.

Recall that there are two ways to declare functions in Javascript, **function
declarations** and **function expressions**.

```js
var sayHello = function() {
  console.log("Hello!");
};

function sayHello() {
  console.log("Hello!");
}
```

#### Hoisting Review

<details>
  <summary>
    Which is a function declaration? Which is a function expression?
  </summary>

- `var sayHello = function () {}` is a function expression.
- `function sayHello () {}` is a function declaration.

</details>

<details>
  <summary>
    How does a function declaration differ from a function expression?
  </summary>

- A function expression follows the same rules as variable assignment. Since the
  value of the reference is a function, that function is only available after
  the assignment.
- With a function declaration, no matter where you put it in your code, it
  behaves as if you wrote it as the very first line in your code.
- Aside from that, they are functionally equivalent.

</details>

### You do: Write your own

Write a small piece of code that meets the following requirements. Identify and
put a comment next to each variable identifying its scope.

- secretEncoder: Takes a string name input and modifies it by substituting each letter in the string with a unique number or new character and returns the "encoded" string.
- secretDecoderRing: Takes an "encoded" string and returns the original decoded value.

### Bonus: Immediately-Invoked Function Expressions

When you are working on larger, more complex applications (particularly ones
with multiple linked scripts), the use of global variables can cause trouble.
Since all global variables are defined on the `window` object, declaring too
many global variables (commonly called "polluting the global namespace")
increases the risk of variables overwriting each other and thereby causing
errors.

One simple solution for this is to wrap each script's JavaScript code in an
Immediately-Invoked Function Expression (IIFE). An IIFE is a function that, when
loaded into the browser, immediately invokes itself and thereby creates a new
local scope to enclose all variables within it.

```js
(function() {
  // IIFE

  var username = "XxXskaterBoi2004XxX";
  var profileID = 4011989;

  function logIn() {
    const sessionID = "8675309";
    let token;
    return decrypt(sessionID);

    function decrypt(string) {
      token = profileID;
    }
    return token;
  }

  logIn();
})();
```

> NOTE: Using an IIFE would prevent you from being able to access variables and
> functions within it from the console.

---

## Review Questions

1. What is a functions in javascript and how can they be useful?
2. How is a side effect different from an output?
3. What is the difference between calling and referencing a function?
4. How is a function declaration different than a function expression?
5. Explain the difference between local and global scope.
6. Explain how hoisting can affect functions.
7. Explain how hoisting can affect variables.
8. What does DRY mean?

## References

- [Understanding Scope and Context in JavaScript](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)
- [Everything you wanted to know about JavaScript scope](http://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/)