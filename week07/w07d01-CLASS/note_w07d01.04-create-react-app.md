![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)

# create-react-app npm package

## I do: Creating a React Application

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

## Additional Resources

- [React Components | Codecademy](https://www.codecademy.com/courses/react-101/lessons/your-first-react-component)
- [Intro to Components | GA Video](https://generalassembly.wistia.com/medias/h64z7lp1ir)
- [React Components and Props | React Docs](https://reactjs.org/docs/components-and-props.html)
- [React Component Props | Codecademy](https://www.codecademy.com/courses/react-101/lessons/this-props)

## [License](LICENSE)

All content is licensed under a CC­BY­NC­SA 4.0 license.

All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
