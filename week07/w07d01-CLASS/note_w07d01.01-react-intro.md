![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)

# Introduction to ReactJS

React was originally created by Facebook engineers in 2011 to improve the performance of its web app. Since its initial release as an open source project, React has become a dominant tool in the market for creating richly interactive web interfaces.

## Learning Objectives

- Describe what ReactJS is and what benefits it provides.
- Explain how and why component architectures are used in modern web applications.
- Create and render React components in the browser.

## Framing

[What is React?](https://generalassembly.wistia.com/medias/lr8idjxtx8)

React was initially motivated by the need to improve the performance of complex, dynamic, data-rich, web application interfaces. At the same time, the engineers at Facebook were also looking to make their web app more easily maintainable, scalable, extensible and testable. There are 3 key aspects of React that evolved to solve these challenges:

<details>
  <summary>
    1. The Virtual DOM
  </summary>
  <p>
    The flowchart below depicts the steps the browser must perform to render a change to the page:
  </p>
  <img src="https://media.git.generalassemb.ly/user/17300/files/9bbd3300-311a-11ea-9ba5-2ec0144463c1" alt="DOM Render Process Flow Diagram" />
  <p>
    It's a complicated process that affects the performance of our applications, especially on devices with slower processors, such as mobile devices. Now, consider how we've been displaying information from external APIs. Conventionally, we make a request to an API, get back data and then use JavaScript to update the page contents. When new requests are made, some of the data may have changed, but much of it probably did not. Nevertheless, each time a new request is made, we update all of the page contents from the API data.
  </p>
  <p>
    It would be far better if we could determine exactly what has changed in the data and then only render the changes. Doing so could eliminate some or all of the render processes needed to update the page. This is exactly what the Virtual DOM in React does for us!
  </p>
  <img src="https://media.git.generalassemb.ly/user/17300/files/4124d680-311c-11ea-8675-8eeed9667c10" alt="Virtual DOM Process Flow Diagram" />
  <p>
    In the diagram above, our data is represented on the left. In software architecture terms, we often refer to this as the Model. In the middle, is the React's Virtual DOM. It uses the data to build a version of the DOM in memory. It then compares it to the previous copy it has in memory. If there are any differences between the two, it patches the changes into the DOM to update the page, which we refer to as the <strong>View</strong> in our application's architecture.
  </p>
</details>
<details>
  <summary>
    2. A component-based architecture
  </summary>
  <p>
    Components are a way to split the UI of your application into <strong>independent</strong>, <strong>reuseable</strong> pieces. As developers, this helps us reduce duplication in our code and it makes it easier for us to reason about each piece of our UI in <strong>isolation</strong> from the larger, more complex, overall application.
  </p>
  <p>
    Components can be as small as an individual button or as large as an entire page. You can think of them as LEGO®s for your application's interface. Individual LEGO pieces come in lots of different sizes and shapes, and you can combine them to build pretty much anything. In React, we combine components to build up our application. Well-built React components can even be reused in different applications just as the parts from different LEGO sets can be used interchangeably.
  </p>
</details>
<details>
  <summary>
    3. The introduction of JSX
  </summary>
  <p>
    Strictly speaking, JSX isn't exclusively a React syntax, but it was built by the folks at Facebook and introduced with an early version of React. <strong>JSX is a syntax extension to JavaScript</strong> that allows us to write code that looks a lot like HTML inside of our JavaScript files. This makes it much faster to build components and easier for us to reason about the interfaces we create in React.
  </p>
</details>

## Breakout: Thinking in Components

In your groups, briefly review how the React docs recommend breaking up a mockup into components in the first couple of paragraphs of this post on [_Thinking in React_](https://reactjs.org/docs/thinking-in-react.html) up to **Step 2**.

With that in mind, take a look at this page on [Craigslist](https://boston.craigslist.org/d/apts-housing-for-rent/search/apa) and answer the following questions:

- How would you apply what you've learned so far about React to break the UI into components?
- What might be an example of a nested component?
- Which components are reused on the page?

## Building Components

To get started with React, we're going to use a popular tool called [**Create React App**](https://create-react-app.dev/) to scaffold our React application.

### I do: Creating a React Application

Watch as I create a React application using Create React App. First, I'll move into the `sandbox` directory where I want to create my project directory. Then, I'll run the Create React App from the command line, which will create the project directory for me and all of the files I need to make my application run.

### You do: Create and Start a React Application

On your own, create a React application:

1. In the Terminal, type: `cd ~/sei/sandbox` and press enter.
1. Once you're in the **sandbox** directory, type `npx create-react-app react-intro` and press enter.
1. After it's completed and you're returned to the prompt, type `cd react-intro`.
1. Next, open the application in VS Code by typing `code .`.
1. Back in the Terminal, type `npm start` to launch the development server.

## Project Structure

Let's explore some of the files that have been created in the project:

```
├── node_modules
├── public
|   ├── favicon.ico
|   └── index.html
├── package.json
├── yarn.lock             (delete this)
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js       (safe to delete)
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTest.js      (safe to delete)
```

1. **index.html**: The page that will be loaded by the browser. Since browsers only understand HTML, CSS, and JS, so everything we write will be converted into JS and automatically injected into this file so that it can be loaded by the browser. **We don't modify this file except for the page `title`.**
1. **src/index.js**: This is the main entry point for our JavaScript and its job is to render the top-level App component into the browser's DOM. **We won't modify this file**.
1. **src/App.js**: As our top-level component of our React application, the App component will load all of our other components as **_descendants_**.

## Creating Components in React

Lets take a closer look at the `App.js` file that makes up our App component. Aside from the unfamiliar `import` statements at the top of the page and the `export` at the bottom of the page, all we have here is a JavaScript function that returns a bit of **JSX**!

```jsx
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```

> In this case the `return` statement is enclosed in some parentheses so that it can break over several lines to make it more readable, but don't let that throw you off. This is just a plain old JavaScript function.

Inspect the page in the browser using the developer tools and compare the HTML that was generated by React with the JSX in the function above.

- What's the same?
- What's different?
- This is where the App component is defined. How do you think it's getting on the page?

### We Do: Modify the App Component

Let's test out our theory about JSX works. Select everything inside of the App function and replace it with `return <h1>Hello World</h1>;`. Now check it out in the browser.

### We Do: Add a New Component

```jsx
import React from 'react';

// HelloWorld is a separate component
// It's job is to render an h1 element
// to the page that contains the text
// "Hello World"
function HelloWorld() {
  return <h1>Hello World</h1>;
}

// App is also a separate component
// App will render our HelloWorld component
function App() {
  // This is how we "invoke" the HelloWorld
  // component's function in React
  return <HelloWorld />;
}

export default App;
```

### I Do: Create a Function Component

If we try to create all of our components in one file, things are going to get really hard to follow really quickly. Plus, components are supposed to be easily reuseable even between different projects so it's common to put each component in its own file!

Observe how I create a new file in the `src` directory to create a new component. Keep an eye on how I name the file and the component. Also be on the look out for how the component is added to my `App.js` file.

## Function Components in React

Function components in React use Javascript's function syntax to define the HTML that the component will produce and the behaviors it will have. In order to make our application modular and components more easily reusable, we separate each component into individual files and use an `export` statement to expose the function so that it can be imported into other files.

### Basic Structure

```jsx
import React from 'react';

// Function name has an initial cap
function HelloWorld() {
  // The return statement must return a single element
  // Parentheses group the JSX so that
  // it can break over several lines for readability
  return (
    <header>
      <h1>Hello World!</h1>
      <h2>⭐️ Welcome to React ⭐️</h2>
    </header>
  );
}

// Export the component so that it can be imported in other files
export default HelloWorld;
```

It's **_super important_** to remember that our component functions can only return **one** element, but that element can contain as many other elements as we want! In the above example, we're return a single `header` element. Which of the following are **not** valid in a component's return statement:

```jsx
//...
return (
  <div>
    <h1>I ❤️ React</h1>
    <p>React components are fun for all ages!</p>
  </div>
);
```

```jsx
//...
return (
  <header>
    <h2>React Fundamentals<h2>
  </header>
  <p>The create-react-app package makes it easy to bootstrap a React application.</p>
)
```

```jsx
//...
return (
  <section>
    <h2>React Documentation Links<h2>
    <ul>
      <li>
        <a href="https://reactjs.org/docs/hello-world.html">Hello World</a>
      </li>
      <li>
        <a href="https://reactjs.org/docs/components-and-props.html">Components and Props</a>
      </li>
    </ul>
  </section>
)
```

#### Component Rules

1. All component function names must start with an initial cap.
1. Every component file must import React.
1. Every component must return one and only one JSX element _or_ null.
1. Don't forget to export your component function so it can be used elsewhere in your application.

We don't have to memorize this structure right now. Let's install the [Reactjs code snippets extension](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets) to help us out.

## Composing Components

Components can be rendered to the page using different methods in React, but the most common way this is done is through **_component composition_** — referring to a component in a parent's output. You can think of this as how we invoke the component's function.

```jsx
import React from 'react';
// Import the component from the same directory
import HelloWorld from './HelloWorld';

function App() {
  // Compose the component inside of
  // the App component's return
  return <HelloWorld />;
}

export default App;
```

How can we render multiple Hello World headers?

## You Do: Create a Component

Create a component that produces the following HTML when rendered on the page:

```html
<main>
  <p>React is the #1 most popular frontend library in the world!</p>
  <button>Upvote React!</button>
</main>
```

Make sure to import your component into the `App.js` file and compose it in the App components output to make it display on the page.

## Additional Resources

- [React Components | Codecademy](https://www.codecademy.com/courses/react-101/lessons/your-first-react-component)
- [Intro to Components | GA Video](https://generalassembly.wistia.com/medias/h64z7lp1ir)
- [React Components and Props | React Docs](https://reactjs.org/docs/components-and-props.html)
- [React Component Props | Codecademy](https://www.codecademy.com/courses/react-101/lessons/this-props)

## [License](LICENSE)

All content is licensed under a CC­BY­NC­SA 4.0 license.

All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
