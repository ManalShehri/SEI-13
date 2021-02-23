# Giffaw

Your goal is to create a Giffaw app that integrates with the Giphy API. By the end of this lab, your app should be able to retrieve and search Giphy's database of gifs.

## Basic Requirements

- A user can see the top 25 trending gifs on page load
- A user can search for gifs, using the input field
- BONUS: A user can click a "See More" button at the bottom of the page to load more gifs

<!-- ![desktop layout](httpss://cloud.githubusercontent.com/assets/3010270/13936044/2ffadf60-ef78-11e5-95c5-55b8aefe68d6.png) -->

## Introduction: Think Like An Engineer

As we get into more complicated labs & problems, practice thinking like engineers. Engineers break down large problems into the smallest possible parts, and tackle each small part one at a time. This is an extremely valuable skill in web development, and one that you will need to nurture throughout your coding journey.

<!-- ![planning](httpss://media2.giphy.com/media/l0IylOPCNkiqOgMyA/giphy.gif) -->

Your app needs Axios calls to get gifs from the Giphy API and display them on the page. Here are some steps to start planning:

1. Familiarize yourself with the [Giphy docs](https://developers.giphy.com/docs/api#quick-start-guide)

   - Note that you need an API key to access the Giphy API (none of your Axios calls will work without one!)
   - Get particularly familiar with the Trending & Search API endpoints – you will be using these to meet your project requirements

1. Include the axios library by adding this script

```html
<!-- Axios -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

1. Get that API key!

   - Follow the directions in the documentation to get an API key (does NOT have to be a production API key)
     – Once you have that key, save it somewhere!
   - Also, add that key to your HTML file on line 29
     - We do this because we want our form to make an API request to the Giphy Lab WITH our API key when we search for gifs

1. Test the API out in your browser before writing any code (i.e. your Axios calls)

   - Go to an API endpoint in your browser, using your API key
   - For example: go to https://api.giphy.com/v1/gifs/trending?api_key=whatever-your-api-key-is-here in your browser to see the top 25 trending Giphy gifs
   - You should see a JSON object with your API response
   - Use the help of JSON formatter extention compatiable with your browser

1. Review how to write an Axios call

   ```js
   axios({
   	// What kind of request
   	method: 'get',

   	// The URL for the request
   	url: 'https://api.giphy.com/v1/gifs/trending',
   })
   	// Code to run if the request succeeds.
   	// The res is the response you get back from the Giphy API is the first argument in your .then() function.
   	.then((res) => {})
   	// Code to run if the request fails!

   	.catch((err) => {});
   ```

1. Fork and clone this project, and start looking around!
   - Are your HTML, CSS, and JS files all linked together properly?

## Get Trending Gifs

Let's get Giphy's most popular GIFs showing up on our page on document load!

<!-- ![trending](httpss://media0.giphy.com/media/3o7aTHbH39h8xYePza/giphy.gif) -->

We first want to write jQuery that returns and `console.log()`s that same JSON object we saw when we visited an API endpoint in our browser. How do we do this?

1. Don't try to do everything at once! First, locate your `scripts/app.js` file and take a look around.

1. Then, make an Axios call to the Giphy Trending endpoint on page load (i.e. when your document is ready):

   ```js
   axios({
   	// What kind of request
   	method: "get",

   	// The URL for your API request
   	url: /* put your trending API endpoint URL here – DON'T FORGET YOUR API KEY!]  think of how to include the limit*/,
   })
   // Code to run if the request succeeds.
   	// The JSON response you get back from the Giphy API is the first argument in your success function.
   .then( res => {
   		// console.log this res json argument to see if you got the correct data!
   })
   // Code to run if the request fails!
   .catch( err => {})
   ```

   - `console.log` the JSON you got back from Giphy's API

1. Once you have the correct JSON being logged in your console, you should think about what you need to to get the gifs to load on the page
   - There is a bunch of stuff in the API response's JSON object – figure out what you need
   - Iterate through the 25 gifs in your API response, and create an image tag for each one
   - Finally, `append()` each gif's image tag to the DOM (to `<div class="gif-gallery"></div>` in your HTML file)

## Search Gifs

Let's allow users of our Giffaw app to type in a search term and get back relevant search results from Giphy's API!

<!-- ![search](httpss://media0.giphy.com/media/l3q2PZSVUUEsajBIY/giphy.gif) -->

1. Think about how you would repurpose your first Axios request to the Trending endpoint for your request to the Search endpoint

   - What would your new API URL be?
   - Think about how you would send the search term you type into your form with your API request
   - Check the API Docs to figure out how
     Hint: included in the url

1. Once I submit my search form, I want my app to trigger an Axios request to the Giphy API's search endpoint

   - In `scripts/app.js`, write some JQuery code to add a 'submit' handler to the form

1. Once we press submit on the form, we want to do several things:

   - Form submissions usually make the whole page navigate somewhere else – we want to [prevent this default behavior](https://api.jquery.com/event.preventdefault/)!
   - Next, we want to make an Axios call to the Giphy API's Search endpoint, using the search term the user typed into the form

   ```js
   axios({

   	// What kind of request
   	method: "get",

   	// The URL for the request
   	url: /* put your search API endpoint URL here – you still need your API key for this URL */,
   })
   .then( res => {
   		// console.log this json argument to see if you got the correct data!
   })
   .catch( err => {
   	// Code to run if the request fails
   		console.log("Error: " + err);
   	}
   })
   ```

1. Once you have your API response's JSON logging to your console, think about how to append these search results to the page
   - First, clear all the GIFs that are already in your `<div class="gif-gallery"></div>`
   - Then, append your search result gifs to that `<div class="gif-gallery"></div>`
1. You're finished! You've created an app that uses Axios calls to get data from a back-end!



## BONUS
1. Add a `Load More` button that, when clicked, appends 25 more gifs to the bottom of the page.
	- Use the `offset` query parameter
	- See Giphy's Search API documentation for more information.

## Additional Resources

- [Axios Docs](https://github.com/axios/axios)
- [Some useful jQuery DOM Manipulation Docs](https://api.jquery.com/prepend/)
