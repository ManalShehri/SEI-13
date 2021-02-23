![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)

# ReactJS - Component Props

## Intro
In order to make our components truly reusable, we need a way to pass them the unique data that they are meant to display. In React we do this with the **_props_** argument. Props is simply an object that is is passed to the component containing all of our argument data in one neat and tidy package. Consider the following Javascript:

```js
function add(num1, num2) {
  return num1 + num2;
}

const result = add(8, 6);
```

What if it was rewritten this way? What would the return statement need to be to get the same result?

```js
function add( obj ) {
  // what goes here?
}

const result = add({ num1: 8, num2: 6 });
```

In React, our components _**always**_ receive one object as an argument. This is called the **props** object and conventionally we'll name the parameter for it `props` in our code:

```jsx
import React from 'react';

function MyComponent(props) {
  console.log(props); // <-- an empty object
  return <h1>Header Here!</h1>;
}

function App() {
  // instead of invoking our function with MyComponent()
  // we invoke it within JSX using <MyComponent />
  return <MyComponent />;
}

export default App;
```

The way we pass arguments to `<MyComponent />` so that the object isn't empty is using key-value pair attributes:

```jsx
import React from 'react';

function MyComponent(props) {
  console.log(props); // <-- no longer empty!
  return <h1>Header Here!</h1>;
}

function App() {
  // instead of invoking our function
  // this way: MyComponent({ name: "Jen" })
  // we invoke it within JSX using <MyComponent name="Jen" />
  return <MyComponent name="Jen" />;
}

export default App;
```

Try adding new properties to the props object on your own. What data type are the property values?

Clearly, if all of our data had to be passed to our components as strings, that would make it a lot harder for us to work with it! JSX has a special syntax for passing values of ANY data type using `{}` instead of `""`.

```jsx
// if we pass values like these:
<MyComponent
  name="Jen"
  age={21}
  favoriteLanguages={['Javascript', 'Python', 'Java']}
/>;

// our props object will look like this:

props = {
  name: 'Jen',
  age: 21,
  favoriteLanguages: ['Javascript', 'Python', 'Java'],
};
```

How would we access the first element in the `favoriteLanguages` array?

### We Do: Create a Welcome Component

Let's create a simple Welcome component. The HTML we'll want to render is:

```html
<p>Welcome, User!</p>
```

<details>
  <summary>Solution</summary>

```jsx
import React from 'react';

function Welcome {
  return <p>Welcome, User!</p>;
}

export default Welcome
```

</details>

Obviously this is a little impersonal, so let's use props to put a name on the page. _Every component is passed a props object as an argument in React._ We can see this if we add a parameter to our component and log out its value inside the component function. Right now, it's an empty object but we can pass any data we want to our components through it. Let's give that a try.

Inside the Header component where the Welcome component is rendered, change the Welcome component to add the following:

```jsx
<Welcome name={'YourName'} />
```

What you should see in the console now is the object with a key value pair representing the name and the string value you set. We can add any kind of values we want here, we're not just limited to strings. Let's try adding a boolean:

```jsx
<Welcome name={'YourName'} newUser={true} />
```

> #### :triangular_flag_on_post: IMPORTANT:
>
> Remember JSX is _an extension_ to the JavaScript syntax, so we **cannot** use any [reserved words](https://www.w3schools.com/js/js_reserved.asp) as a prop name. This is the reason we use `className` instead of `class` to add CSS classes to elements in JSX.

## You Do: Display a Custom Message

Display a custom message to the user based on whether the `newUser` prop is set to `true` or `false`. If the value is `true`, the message should read: "Welcome aboard!" followed by the user's name. If the value is `false`, the message should read: "Welcome back!" followed by the user's name.

<details>
  <summary>Solution</summary>

```jsx
import React from 'react';

function Welcome(props) {
  const message = props.newUser ? 'Welcome aboard' : 'Welcome back';
  return (
    <p>
      {message}, {props.name}!
    </p>
  );
}

export default Welcome;
```

</details>

### Explore on Your Own

Test adding props of different datatypes.

- What happens if you try to render an array?
- What happens if you try to render a whole object?
- Can you pass a function as props?

## Props Summarized

- Props are the key value pairs that are passed to the props object
- Props can be passed any datatype using curly braces `propName={any datatype here}`
- Props cannot be named using a JavaScript reserved keyword.
- There is no limit to the number of props that can be passed to a component (except readability and common sense 😵)

## You Do: Create a Movie Component

Our movie app needs to display some movies. First, add the following variable above the App component function:

```js
const movie = {
  title: 'Star Wars: The Rise of Skywalker',
  poster: 'https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg',
  rotten_tomatoes: 53,
  audience_score: 86,
  summary:
    'The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.',
};
```

Your rendered component output should look like this:

```html
<div class="movie">
  <h2>Star Wars: The Rise of Skywalker</h2>
  <img
    src="https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg"
    alt="movie poster"
  />
  <p>
    The surviving Resistance faces the First Order once again as the journey of
    Rey, Finn and Poe Dameron continues. With the power and knowledge of
    generations behind them, the final battle begins.
  </p>
</div>
```

### We Do: Create a Movies Component

### On Your Own

Create a new component called **Movies** that renders the following HTML when imported and rendered in the App:

```html
<section>
  <h2>Now Playing</h2>
</section>
```

#### Pass the Movies Component Data

Delete the `movie` variable at the top of our App.js file. Then, copy and paste the `movies` array below and paste it above the `App` function in the App.js file:

<details>
  <summary>Movie Data</summary>

Copy and paste the movies variable above the App function

```js
const movies = [
  {
    id: 181812,
    video: 'https://www.youtube.com/embed/8Qn_spdM5Zg',
    title: 'Star Wars: The Rise of Skywalker',
    release_date: '2019-12-20',
    poster: 'https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg',
    image: 'https://image.tmdb.org/t/p/w1280/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg',
    rotten_tomatoes: 53,
    audience_score: 86,
    summary:
      'The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.',
  },
  {
    id: 530915,
    title: '1917',
    release_date: '2019-12-10',
    poster: 'https://image.tmdb.org/t/p/w500/Aqr1jDwGb1IfAB6Lh1fNx7AbEZE.jpg',
    image: 'https://image.tmdb.org/t/p/w1280/tUWivz05fcY14K6RzicRm7IHkUD.jpg',
    rotten_tomatoes: 90,
    audience_score: 90,
    summary:
      "At the height of the First World War, two young British soldiers, Schofield and Blake are given a seemingly impossible mission. In a race against time, they must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers—Blake's own brother among them.",
  },
  {
    id: 431693,
    title: 'Spies in Disguise',
    release_date: '2019-12-25',
    poster: 'https://image.tmdb.org/t/p/w500/30YacPAcxpNemhhwX0PVUl9pVA3.jpg',
    image: 'https://image.tmdb.org/t/p/w1280/qlYxtqVfu2LOdvYMMDPCSGX0Oz0.jpg',
    rotten_tomatoes: 76,
    audience_score: 91,
    summary:
      "When the world's best spy is turned into a pigeon, he must rely on his nerdy tech officer to save the world.",
  },
  {
    id: 331482,
    title: 'Little Women',
    release_date: '2019-12-25',
    poster: 'https://image.tmdb.org/t/p/w500/mSmiB8XjUnR1GSIljuCPGsk0cwX.jpg',
    image: 'https://image.tmdb.org/t/p/w1280/3uTxPIdVEXxHpsHOHdJC24QebBV.jpg',
    rotten_tomatoes: 95,
    audience_score: 92,
    summary:
      'Four sisters come of age in America in the aftermath of the Civil War.',
  },
  {
    id: 366668,
    title: 'Playmobil: The Movie',
    release_date: '2019-12-06',
    poster: 'https://image.tmdb.org/t/p/w500/zPQzLZnfVw9fbXyxxglyOsmQBlu.jpg',
    image: 'https://image.tmdb.org/t/p/w1280/axmxVeX5R1FfN7w4LNFehskDxW1.jpg',
    rotten_tomatoes: 17,
    audience_score: 61,
    summary:
      'Marla is forced to abandon her carefully structured life to embark on an epic journey to find her younger brother Charlie who has disappeared into the vast and wondrous animated world of Playmobil toys.',
  },
];
```

</details>

We're going to delete the single `Movie` component from `App` (yes, delete it, we're going to move it somewhere else) and replace it with our new `Movies` component.

If we want the Movies component to get the data from the App component stored in the `movies` array what can we do?

<details>
  <summary>Solution</summary>

Use `props` of course!

```jsx
function App() {
  return <Movies movies={movies} />;
}
```

</details>

### Accessing the Data in Movies

Inside of our Movies component, we'll reuse our single Movie component. Let's make one Movie to start. Import the `Movie` component at the top of the Movies.js file. Next, add the `Movie` component to the return below the `h2` element.

The movie component expects three pieces of data: a title, an image url and a summary. Where can we get the data to pass to the Movie component as the `title`, `image` and `summary` props?

<details>
  <summary>Solution</summary>

Get it from the props object!

```jsx
function Movies(props) {
  return (
    <section>
      <h2>Now Playing</h2>
      <Movie
        title={props.movies[0].title}
        image={props.movies[0].poster}
        summary={props.movies[0].summary}
      />
    </section>
  );
}
```

</details>

Can you make it show more than one movie?

### Display All of the Movies

While this approach works for us, its not very practical. We need a way to display an unknown number of movies. Earlier we saw that if you try and render an array, React is smart enoungh to just drop the brackets and display all of the data. We also saw that if we try to render an object the whole app breaks.

To solve this, we need to create a new array from the existing one that contains a bunch of JSX elements. Array iteration methods can help us to do that easily! In this case we want the new array to have the same length as the movies array so the `.map()` method is the one we'll use:

```jsx
function Movies(props) {
  return (
    <section>
      <h2>Now Playing</h2>
      {movies.map((movie) => (
        <Movie key={movie.id} title={movie.title} image={movie.image} />
      ))}
    </section>
  );
}
```
## Additional Resources

- [React Components | Codecademy](https://www.codecademy.com/courses/react-101/lessons/your-first-react-component)
- [Intro to Components | GA Video](https://generalassembly.wistia.com/medias/h64z7lp1ir)
- [React Components and Props | React Docs](https://reactjs.org/docs/components-and-props.html)
- [React Component Props | Codecademy](https://www.codecademy.com/courses/react-101/lessons/this-props)

## [License](LICENSE)

All content is licensed under a CC­BY­NC­SA 4.0 license.

All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
