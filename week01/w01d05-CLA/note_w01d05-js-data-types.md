[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Introduction to JavaScript: Data Types

## Learning Objectives

- Start using JavaScript and use developer tools.
- Introduce the syntax of the JavaScript language.
- Work with the primitive data types in JavaScript.
<!--- - Start working with arrays in JavaScript. --->

## Intro (5 minutes / 0:05)

Today we are going to get started with our first real programming language of
the course! We've learned about HTML + CSS in previous classes this week, so we
know how to make static webpages where there isn't much user interaction. Today
we are going to move towards making our pages interactive and dynamic.

But first, we must start with the basics.

## Primitive Data Types in JavaScript

What do we mean when we say data types?

> Think of data types as ways of representing information.

A [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
data type is one that represents a single value (as opposed to
multiple values). In JavaScript there are five common primitive types:

1. Strings
2. Numbers
3. Booleans
4. Undefined
5. Null

There is a sixth data type, [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#BigInt_type),
which is relatively new and not commonly used yet.

## Strings (10 minutes / 0:30)

Strings are how JavaScript represents text. They are a series of characters in
single or double quotes. `'Hello World!'`, `"Hello World!"`, `'h'`, and `''` are
all examples of strings in JavaScript.

It doesn't matter whether you use double or single quotes, but if you need to
include either a double or a single quote in your string, wrap it in the other
type.

Example:

```js
"What's the weather like today?";

'This dude is really into "air quotes"';

```

In order to join multiple strings together, you can use **concatenation** or
**interpolation**.

Concatenation is when you add multiple strings together.

```js
let helloWorld = 'Hello' + 'world';
```

Interpolation is where you reference a variable within a string. Use back ticks
for the entire string, and put a dollar sign with curly brackets around the
variable.

```js
let hello = 'Hello';

let helloWorld = `${hello} world`;
```

> You can totally use backticks without using interpolation as well, if you
> prefer.

[Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
are a bunch more examples.

### String escape sequences

Sometimes you will need to use special characters or formatting in strings that
can't be entered the same way as you would in a word processor. In these cases,
you use "escape sequences".

- Syntax: backslash + letter (e.g., `"\n"`).

```js
// "\n" = new line
'Hello\nGoodbye';
// returns
// "Hello"
// "Goodbye"

// "\t" = tab
'Once upon\ta time...';
// returns "Once upon    a time..."

// You can also escape quotes
"What's with this dude's \"air quotes\"? He's insane";
// returns "What's with this dude's "air quotes"? He's insane"

```

> You can check out more escape sequence examples
> [here](http://www.javascriptkit.com/jsref/escapesequence.shtml).

### You Do: String exercise

- In your script.js file, console.log 5 strings
  - 1 that has double quotes
  - 1 with single quotes
  - 1 with double quotes and a single quote inside it
  - 1 with single quotes and a double quote inside it
  - 1 with escape characters

## Numbers (10 minutes / 0:40)

Numbers are simply represented by their digits. In JS, `4`, `345092318`, `-3`,
`2.5` and `10e7` all mean just what you would expect. To create a number in JS,
just write it.

> If you write `"645"` is that a number?

In your browser console, type `42` and hit **Enter**.

You can also do math in JavaScript. Type `42 + 3` into the console and see what
happens.

```js
// Addition
10 + 2;
// => 12

// Subtraction
10 - 2;
// => 8

// Multiplication
10 * 2;
// => 20

// Division
10 / 2;
// => 5

// Exponents
10 ** 2;
```

- You can find a full list of arithmetic operators
  [in the expressions and operators MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators).

### % (Modulus)

The modulus operator - `%` - returns the remainder of a division operation.

```js
12 % 5;
// => 2, which is the remainder of 12 / 5
```

Modulus has a pretty handy use case: to check if a number is even. We can do
this by running `NUMBER % 2`. If a number is even, the result should be 0 (i.e.
there should be no remainder).

```js
4 % 2;
// => 0, so 4 is even

5 % 2;
// => 1, so 5 is odd. When 5 is divided by 2, the remainder is 1.
```

## Null + Undefined + NaN (5 minutes / 1:20)

- If we declare a variable without assigning a value to it, it will, by default,
  have a value of `undefined`.

- Null is very similar to `undefined` but we have to explicitly assign it to a
  variable.

In summary, the difference is that `undefined` implies nothing because it never
was anything while `null` implies explicitly set to nothing.

### NaN ("Not a number")

A special number...that's not a number?

```js
typeof NaN;
// => Number
```

`NaN` is the return value from operations which have an undefined numerical
result (e.g. dividing 0 by 0, multiplying strings together).

```js
0 / 0;
// => NaN
```

You can test whether a value is a valid number using the `isNaN()` function. The
method will return false if the argument passed into it is a valid number.

```js
const myFavoriteNumber = 5;
isNaN(myFavoriteNumber);
// => false, because 5 is valid

const myUnrealNumber = 0 / 0;
isNaN(myUnrealNumber);
// => true, because 0 divided by 0 is NaN
```

## Variables (10 min / 1:15)

**Variables** are containers for information -- we can store any value in them.

Think of a variable like a box. You can put lots of things into the box, like a
doll, rug, or cat. The box still contains something.

We use variables to help repeat, change, store, or edit our data.

In order to **declare** a variable in JavaScript we use the keywords `var`,
`const`, or `let`. The original declaration keyword was `var`, but in newer
versions of JavaScript `const` and `let` were implemented. `const` is used on
variables that will not be changed in your JavaScript code. `let` is used for
variables that do change.

Most of the time, we want our variables to immediately store a value (like a box
with a cat in it). Therefore, we **assign** values to our variables when we
declare them.

We can create a variable without assigning it a value, if we want. This would be
like having an empty box.

```js
let noValue;
console.log(noValue);
// => undefined
```

Here are three examples of variable assignment and declaration at the same time.

```js
const myVar = 42;
console.log(myVar);

const sum = myVar + 8;
console.log(sum);

let doubleSum = 2 * sum;
console.log(doubleSum);
```

Once we have a declared variable, we can change its value. Here are some
examples:

```js
let noValue;
console.log(noValue);
// => undefined

noValue = 'assigned now';
console.log(noValue);
// => 'assigned now'
```

You can change the properties of a constant object:

```js
// You can create a const object:
const person = {
	name: 'Clay Stevens',
	profession: 'sales',
	contact: '111-111-1111',
};

// You can change a property:
person.profession = 'Software Engineer';

// You can add a property:
person.age = 32;
```

But you can NOT reassign a constant object:

```js
const mobilePhone = {
	type: 'iphone',
};

mobilePhone = {
	type: 'samsung',
};
```

JavaScript is a "dynamically-typed" language, meaning a variable can switch
between data types. The following change is valid.

```js
var myFavoriteNumber = 5;

console.log(myFavoriteNumber);
// => 5

myFavoriteNumber = 'five';

console.log(myFavoriteNumber);
// => "five"
```

## Variable Syntax (5 minutes / 1:25)

### Semicolons

- Semicolons can be put at the end of each line.
- We recommend using them consistently throughout this course!
- References:
  - [JavaScript Semicolon Insertion](http://inimino.org/~inimino/blog/javascript_semicolons)
  - [Are Semicolons Necessary in JavaScript](https://www.youtube.com/watch?v=gsfbh17Ax9I)
  - [An Open Letter to JavaScript Leaders Regarding Semicolons](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding)
  - [Hacking Semicolons (by Evan You who wrote Vue.js)](http://slides.com/evanyou/semicolons#/)

### camelCase

JavaScript variables and function names are case sensitive. You can write them however you want, but they're conventionally written using camel
case syntax.

- First letter of first word lowercase
- First letter of remaining words uppercase
- No spaces or punctuation between words

#### Examples

```js
const pizzaTopping = 'pepperoni';
const isThisVariableCamelCase = true;
const hasURLChanged = false;
```

Because Javascript is case sensitive, it helps to be consistent in your naming conventions.

```js
const pizzaTopping = 'pepperoni';
console.log(pizzatopping);
// Uncaught ReferenceError: pizzatopping is not defined
```

> Note: Other types: kebab-case, which separates words with dashes, and snake
> case, which uses underscores.

Use kebab case for CSS classes. CSS is essentially case-sensitive, so
this-class-name is much easier to read (and type!) than thisClassName.

snake_case is used in programming languages like Python.

> You don't have to follow camelCase standards, you could just UPPERCASE
> EVERYTHING. But it's a good idea to be consistent everywhere, especially
> when working with other developers.

## You Do: Type Conversion (5 minutes / 1:30)

With the person next to you, spend five minutes on the following activity.
First, predict what the line of code will do, next run the code in your REPL and
see what it actually does.

```js
typeof 15;
// Prediction:
// Actual:

typeof 5.5;
// Prediction:
// Actual:

typeof NaN;
// Prediction:
// Actual:

typeof 'hello';
// Prediction:
// Actual:

typeof true;
// Prediction:
// Actual:

typeof (1 != 2);
// Prediction:
// Actual:

'hamburger' + 's';
// Prediction:
// Actual:

'hamburgers' - 's';
// Prediction:
// Actual:

'1' + '3';
// Prediction:
// Actual:

'1' - '3';
// Prediction:
// Actual:

'johnny' + 5;
// Prediction:
// Actual:

'johnny' - 5;
// Prediction:
// Actual:

99 * 'luftbaloons';
// Prediction:
// Actual:
```

JavaScript will try to make sense of any strange operations you throw at it.

- Examples of "strange": subtracting a number from a string, multiplying `null`
  by 100.
- It does this by converting data types using a process called type coercion.

You might encounter this when dealing with numerical values in string form.

```js
// In some cases JavaScript is helpful and converts strings to numbers in the correct way.
'3' - '2';
// => 1

// ...but sometimes it doesn't. In this example, the + operator acts as if it's concatenating two strings.
'3' + '2';
// => 32

// And this?
'five' * 5;
// => NaN
```

When in doubt, convert data types that should be numbers using `parseInt()`.

```js
parseInt('3');
// => 3
// parseInt converts a string to a number value, if available.

parseInt('burrito');
// => NaN, because "burrito" cannot be converted into a number
```

There are other examples of type coercion, but the point here isn't to remember
them all. Just be aware that sometimes JavaScript will yield weird results with
no explanation - and it may be due to type coercion.

## Data Type Methods (Rest of class / 2:30)

Each of the data types we've covered so far has their own "methods". These are
functions that you can run to perform certain operations.

Pay attention to what type you're trying to use a method on. For example, you
can't use string methods on numbers, and vice versa. Each type has its own
methods.

### String Methods

**.substr()**: return a portion of a string. First argument is the
start position; second argument is the length of the section you copy. If you leave out the second argument it will include everything from the start to the end.

```js
let greetings = 'Hi there friend!';
let buddy = greetings.substr(9, 6);
console.log(buddy);
// friend
```

**.concat()**: combine two strings together.

```js
let greeting = 'Hello';
let place = 'Las Vegas';

greeting.concat(' ', place);
// "Hello Las Vegas"
```

**.indexOf()**: Find the position of a string inside of another string

```js
let nooo = 'Luke, I am your father';
nooo.indexOf('father');
// 16
```

**.split()**: split a string into an array, determined by the separator you pass
in

```js
let phrase = 'Rubber baby buggy bumpers is a hard one';
let result = phrase.split(' '); // split on the space separator
console.log(result);
// ["Rubber", "baby", "buggy", "bumpers", "is", "a", "hard", "one"]
```

> There are way more methods than this. See the
> [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

#### You do: String Methods

Spend a few minutes experimenting with each of the methods.

### Number Methods

There aren't as many of these, but still two useful ones.

**\*.toString()**: Coverts a number to a string.

```js
let makeMeAString = 58320;
let nowImAString = makeMeAString.toString();
console.log(nowImAString);
// "58320"
```

**\*.toFixed()**: Trim a decimal to the specified number of digits.

```js
let makeMeFixed = 58320.73242;
let fixed = makeMeFixed.toFixed(2);
console.log(fixed);
// "58320.73"
```

## Closing

## Additional Practice + Resources

- [Khan Academy Intro to Programming JS](https://www.khanacademy.org/computing/computer-programming/programming#intro-to-programming)
- [You Don't Know JS: Up & Going](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/README.md#you-dont-know-js-up--going)
- [Eloquent JavaScript](http://eloquentjavascript.net/)

## Bonus: Linters

- Install
  [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  (formatter)
- Install
  [Standard-JS](https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs)
- Install
  [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
