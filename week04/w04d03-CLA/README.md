# Node

Node.js runs JavaScript code. This means that millions of frontend developers that already use JavaScript in the browser are able to run the server-side code and frontend-side code using the same programming language without the need to learn a completely different tool.

For us, that means we can run javascript on our local computers without needing to rely on the browser and eventually we can build web servers with javascript!

## Installation

Let's install node together.  In your terminal, run the following command
```
brew install node
```

Then we can check what version of node we have downloaded with
```
node -v
```

For windows users or those not using `brew`, follow [install steps here](https://nodejs.org/en/)

## Node JS REPL

With Node, we can enter a javascript REPL environment, similar to our browser console.

To do this, we simply run `node` in the terminal.
Notice how now our terminal starts with `>`.

We are now in a javascript REPL environment so commands like `ls` or `cd` will not work.  But commands like `const name = 'Mike'` will.

To exit the REPL we can type `.exit` or use `ctrl + c`.

```
$ node
> 1 + 1
2
> .exit
$
```

## Running JS files with Node

We have a javascript file located at [js/practice.js](js/practice.js).
We can execute that file with node by running `node js/practice.js` in the terminal.

## Exporting JS files with Node

With node, we are able to export data from one file into another file.  HOORAY!  What an exciting feature.  We often call the file that exports data into another file a module.  We can include many modules into a JS file.  Let's try doing this together.

We have an example of a module in [js/myModule.js](js/myModule.js).
We are exporting the data from this file into a file named [js/useModule.js](js/useModule.js)].
These names are not important and we can name the files anything we want.
Together, let's review the files and we will see how exporting and requiring a file works in JS.

## NPM (node package manager)

A node package is one or more modules grouped together.  To help us manage our packages node includes a package manager named NPM.  We can use it to install packages globally throughout our whole computer or locally to individual projects.  

### Cool ASCII Faces

To install the package globally we can do
```
npm install cool-ascii-faces --global
```

Now let's use our [js/funnyFaces.js](js/funnyFaces.js) file to use the package in our JS file.

### ESLint

Let's install our first useful NPM package.  We will use ESLint to help follow best practices in JS.  We are installing more than one package globally in a single command.
- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- [babel-eslint](https://www.npmjs.com/package/babel-eslint)

```
npm install eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react babel-eslint --global
```
ESLint allows us to have different JS rules enforced for every project or we can set rules to be followed globally.  To set them globally we will need to add a `.eslintrc` file to our home directory and add some settings.

```
cd ~

touch .eslintrc

code .eslintrc
```
Then in the `.eslintrc` file add
```js
{
 "extends": "airbnb",
 "env": {
 "node": true,
 "es6": true,
 "browser": true
 },
 "parser": "babel-eslint",
 "rules": {
    // we can add custom rules here if we want
 }
}
```
Now we have to set up VSCode to use the NPM package.
```
CMD + Shift + X
```
Search for `ESLint` and install.  

Let's restart VScode and make sure ESLint is working by opening [js/eslintPractice.js](js/eslintPractice.js)

