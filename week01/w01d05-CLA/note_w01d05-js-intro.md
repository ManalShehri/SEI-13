[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Intro to JavaScript

## Lesson Objectives

_After this lesson, students will be able to:_

1. Define programming and why we're learning it
2. Read Node error messages
3. Add comments to code
4. Link a JavaScript file
5. Use Developer Tools
<!---1. Describe the basic data types of JS
6. Assign values to variables
7. Concatenate values
8. Write a While loop
9. Write a For loop --->

## Define programming and why we're learning it

### What is Programming?

The first few weeks of this course will focus on programming skills. This means learning how to "think like a programmer", and also learning to use tools such as Terminal, Atom (text editor), Git, etc.

Loosely speaking, learning to "think like a programmer" involves learning:

**Concepts**

- For example, the concept of a "loop", something that repeats.
  - Values might change with successive loops.

**Syntax**

- Precise spelling of variables and inclusion of parentheses, etc.
  - Computers are very literal. They only do exactly what you tell them to. If you mess something up, they don't try to fix it they'll just let you know something went wrong (hopefully)

**Logic**

- The sequence of execution in a program, line by line.
- Problem-solving. How code interacts with other code and using it to build something more complex

### Why learn programming?

We are making **software**, not regular websites.

The internet has changed a lot from static websites to highly complex apps.

People these days use **apps** (either on mobile or desktop), which are hosted on the internet rather than installed locally. This is the current web paradigm called **software as a service**, _SaaS_.

Software requires internal logic. Programming is the means of supplying internal logic to a program.

### Why JavaScript?

The language we will be learning first is JavaScript. In a way it does not matter which language we learn, because many of the same principles apply across languages.

JavaScript is the most in-demand language for junior developers, and there's a lot of work available out there for those who know it. It is also the only language that both browsers and servers understand, making it a great teaching tool.

JavaScript was initially developed in 10 days in the late 1990s by Brendon Eich for the purpose of working the browser. In the last 20-30 years JavaScript has grown in popularity, power and it's become a much more enjoyable language to program in. It has become standardized and is being used as a backend, as one of the languages used in the Internet of Things, and more.

Node is an app (application) that runs on your computer that lets you run JavaScript on your computer, outside of a web browser. We'll be learning more about node throughout the course.

## Console Log

`console.log()` is a function that lets us print things to the screen.

This is one of the most simple things you can do in programming and often the first things you do.

Some other programs might call this print or put... but in JavaScript it is console.log

## Read Node error messages

Let's dive back into programming.

Use the `first_code.js` file from earlier.

Let's make a mistake together

type
`console.log('Hello world);`

> oops! what did we do wrong?!

Error messages are good. They are not adversarial! They are there to help you.

Error messages are **clues** that you learn to read. You should be able to read these clues on your own.

![](https://i.imgur.com/HjquPtu.png)

The error above is typical. It looks intimidating and weird, but if you pry, you will find valuable clues. For example:

Error messages will tell you a **specific line number** where in the code the error occurred. This tells me the error is on line 1: `first_code.js:1`

Errors will often tell you what **type** of error. `SyntaxError: Unexpected token ILLEGAL`

You have to learn to sort the 'wheat from the chaff' so to speak. This will come with practice.

Errors are a **growth opportunity**. When you receive an error, yes it is an obstacle, but with a little patience it will turn you into a more informed, better developer.

## Add Comments to code

Comments are an extremely important part of writing code. They help us make
sense of our code, especially for other people reading our code, or when we have
walked away from some code and have completely forgotten what certain sections
of it do. This happens much more quickly than you may imagine.

If you are working on a team, your documentation and commenting practices often
translate to how easy you are to work with!

```js
// Single line comment

/*
  Multiple
  line
  comments
*/
```

If your file name ends with the correct extension `.js` pressing `command `+ `/` will toggle your code to have/remove comments with the correct syntax

## Linking a JavaScript file (10 minutes / 0:15)

We'll start by creating a new directory with HTML and JS files. From the command
line:

```sh
cd ~/sei/sandbox
mkdir js-data-types
cd js-data-types
touch index.html script.js
code .
```

Go into the HTML file and enter HTML boilerplate code. If you're using VS Code
you can just type `html:5` and hit tab, or you can enter all the boilerplate
below:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<title>Document</title>
	</head>
	<body></body>
</html>
```

Next, we will link the JS file into the HTML file, by adding a script element
into the bottom of the `body`, as follows:

In index.html:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<title>Document</title>
	</head>
	<body>
		<script src="script.js"></script>
	</body>
</html>
```

Once the file is linked, we can go into our JS file and begin coding. In
`script.js`, add the following line of code:

```js
console.log('hello world');
```

Back at the command line run:

```sh
open index.html
```

Your default browser will open (we ask for this class you use Chrome but other
browsers will have similar tools you should definitely explore).

You can bring up the Development Tools (DevTools) with the command **Command +
Option + J** (`⌘ + ⌥ + J`) and should see something that looks like this:

![DevTools Console says 'Hello World!'](https://user-images.githubusercontent.com/7882341/27314092-830ea8ac-553f-11e7-954f-c8502b382d6d.png)

Again, back at the command line run:

```sh
touch script2.js
```

In script2.js add:

```js
console.log('hello world, from script2');
```

In index.html, in the head, add:

```html
<script defer src="script2.js"></script>
```

Now let's do it a third time!

Create a `script3.js` and include it in head, this time without a `defer`
attribute.

```html
<script src="script3.js"></script>
```

Go back to the browser and refresh the page.

### Many ways to link a file

Placing the script at the bottom of the `body` allows your HTML to load first,
then it downloads and executes your JS file.

Putting `defer` on your script tag in the head executes it after the entire page
has loaded.

Placing a plain old script tag in the head, that doesn't have any attributes on
it, runs the script before html loads. If you do this make sure that your script
doesn't depend on HTML already being there.

**Bonus Reading:**
[async and defer attributes in a script tag](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)

It is also possible to write JavaScript directly into your HTML file within the
`script` tags, but keeping all JS in a separate file makes it easier to edit and
more efficient when loading the page.

## Developer Tools (5 minutes / 0:20)

### `console.log`

We have seen `console.log` frequently in the pre-work and we will see it much
more. The most difficult aspect of programming is not having insight into the
exact value of things in a running program. `console.log` provides us this
insight.

![REPL 42](https://user-images.githubusercontent.com/7882341/27314489-4275c7b4-5542-11e7-8c16-6b6431f9cc42.png)

The console is also known as a REPL (Read-Eval-Print-Loop). When you hit
**Enter**, you tell the computer:

1. **R**ead the JavaScript I just wrote (`42`).
2. **E**valuate it (calculate its value, `42`).
3. **P**rint the value that was evaluated (`42`).
4. **L**oop, returning control to the user and wait to be asked to read the next
   line.

Let's try it out. In your script.js file:

```js
const number = 9;

console.log(number);
```

Go back to the browser, and refresh the page. Type `number` into the console. It
will read, evaluate, and print `9`.

Another example of a REPL is: [https://repl.it/](https://repl.it/). This may be
a helpful tool to use throughout class to test code.

Keyboard shortcut: Highlight code and press **Command + /** (`⌘ + /`)
