## JS DOM commands

You are not expected to remember these commands. This is an exercise to get you familiar with the concept of the DOM and the pattern of how we interact with it. We will be using jQuery commands in the future.

At the bottom of the instructor notes for this morning's lecture is an appendix of vanilla DOM commands, use that and your notes from lecture to complete the following

<hr>

## Manipulate the DOM

### Notes

Use `document.querySelector()` to find your an element

Use `document.querySelectorAll()` to find a collection of elements in the DOM.

Refer back to the instructor notes (and the appendix at the bottom) - for more details/syntax checks

## Activity
#### Query and change some elements

&#x1F535;  Get the element with the id container and save it to a variable . Console.log that variable.

**Make sure** you get the element logged in the console:

![](https://i.imgur.com/1ocG4tc.png)


&#x1F535;  Get the `h2` element  and save it to a variable `h2`. Console.log that variable.

&#x1F535;  Using JavaScript, change the innerText of your `h1` to say "Welcome to (Add your town here)"

&#x1F535;  change the `title` of the html to your town name

&#x1F535;  change the `h2` to have 3 exclamation points at the end

&#x1F535;  Get all of the elements with the class "header" and save them to a variable. Console.log that variable.

**Make sure** you get an array:

![](https://i.imgur.com/Ahh8J0C.png)

And **not this** (a single element)

![](https://i.imgur.com/2YLSvzd.png)



Why?

&#x1F535;  Change the style/color of the text of your ONE of your `li` elements to your [favorite html color](https://htmlcolorcodes.com/color-names/)

&#x1F535;  Change the innerText of one of your list items to 'Jamboree sandwich at the Jambo-ree'

#### Remove an element:

&#x1F535; Select any element using `querySelector` and save it to a variable

&#x1F535; and remove it from your page using `.remove()`

- if you would like your element to stay, just comment this line of code out - so you have it as a reference

#### Create an element and append it

##### Add an image of your own town

&#x1F535; Create a new `img` element using `document.createElement()`

&#x1F535; Add an attribute for the source url of your new image using `.setAttribute()`, (An Image of your town)

&#x1F535; Append it to your page, somewhere, using `.appendChild()`

&#x1F535; Check that your image has appeared and its not too big, otherwise change the size of it using styles

&#x1F535; Change the style/color of the text of your ALL of your `li` elements to another [favorite html color](https://htmlcolorcodes.com/color-names/)  

### Hungry for More

- We won't be using `Vanilla` JavaScript for DOM manipulation for the rest of the course. So now would be a good time to get a little extra CSS practice
- Go ahead and style your page with some CSS

### Wildly Ravenous for Even More
- Replace all the list items and append facts about your own town

- Build an image carousel that scrolls through 2-4 images every 2-3 seconds



