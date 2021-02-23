# Advanced ES6 Syntax

## Learning Objectives

- for ... in for Objects
- Destructuring
- Rest parameters
- Spread operator

#### Iterating through an Object

Like arrays, you can use a loop to iterate through an object. Say we want to print out all of an object's keys...

This is called a `for in` loop

```js
// Iterate through object keys
for (key in car) {
  console.log(key);
}
```

> Knowing this, how could we go about getting all the values in an object?

Javascript objects also have native methods that take care of this for us...

```js
// .keys()
Object.keys(car);
// .values()
Object.values(car);
// key-value pairs
Object.entries(car);
```



## Further Reading / Resources

- [for ... in for Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
