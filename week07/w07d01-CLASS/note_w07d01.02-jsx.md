![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)
# JSX - React

## Components

The basic unit you'll be working with in ReactJS is a **component**. Components are pieces of our application that we can define once and reuse all over the place. They're a way
to modularize or compartmentalize features of our applications.

With components, there is more integration and less separation of HTML, CSS, and JavaScript.
Instead of creating a few large files, you will organize your web app into small, reusable components that encompass their own content, presentation, and behavior.

## JSX

#### Element
```js
const element = <h1>Hello, world!</h1>;
```

#### Multiple Elements
- wrap in `()`
- must have 1 single parent element
```js
const introductionElements = (
  <header>
    <h1>Hello, world!</h1>
    <h2>Welcome to my app</h2>
  </header>
);
```

#### Self Closing Tags
- need to end the tag with `/>` to close the tag
```js
const selfClosingExamples = (
  <div>
    <img src="path.jpg" />
    <br />
    <hr />
  </div>
);

```
 
#### Interpolation 
```js
const name = 'Sami';
const element = <h1>Hello, {name}</h1>;
```

#### Interpolation with functions
```js
const formatName = (user) => user.firstName + ' ' + user.lastName;

const user = {
  firstName: 'Mike',
  lastName: 'Finn'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

```

#### Ternary Operator instead of `if` statement
```js
const name = 'Sami';

const element = (
  <h1>
    {name === 'Sami' ? 'Hello Sami the wise' : 'Hello ' + name}
  </h1>
)

```

#### Classes
- use `className`
```js
const element = <h1 className='intro intro-alert'>Hello World</h1>;
```

#### Comments
```js
const name = 'Sami';

const element = (
  <h1>
    {/* 
      Checks if the user is Sami for a custom message
      If not Sami then just says Hello and the user name
    */}  
    {name === 'Sami' ? 'Hello Sami the wise' : 'Hello ' + name}
  </h1>
)

```
- [JSX visual compiler](https://babeljs.io/repl/)

## React Site Examples

- [React](examples/03.react-site-intro)
- [React with JSX](examples/04.react-site-babel)
- [React with JSX & Classes](examples/05.react-site-babel-classes)

## Create React App

- [Create React App](https://github.com/facebook/create-react-app)
