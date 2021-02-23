# jQuery

## What Is jQuery

[jQuery](https://api.jquery.com/) is a cross-browser JavaScript library designed to simplify the client-side scripting of HTML.

*	“Cross browser” - works the same in all* browsers.

*	Allows:
	*	Document traversal
	*	CSS Manipulation
	*	Event Handling
	*	Animation
	*	and more!

<img width="1000" alt="jquery-dom" src="https://user-images.githubusercontent.com/5384023/51519572-6a2c5880-1e32-11e9-99a0-000e18b63417.png">


## Including jQuery

Adding jQuery to your website

1.  Download and link to the file
```html
<script src="js/jquery-3.3.1.min.js"></script>
``` 

2.  Link to a remote version (CDN)

```html
<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
``` 
## jQuery Syntax vs DOM Syntax

__Syntax:__ Spelling and grammar rules of a programming language.


Note:
Like with any language, there are formal rules around how to write it. This is the syntax.

<img width="1000" alt="jquery-select" src="https://user-images.githubusercontent.com/5384023/51520047-c0e66200-1e33-11e9-9d73-04d2d582e45b.png">

<img width="1000" alt="jquery-css-select" src="https://user-images.githubusercontent.com/5384023/51520072-d3609b80-1e33-11e9-90f0-3798bb5b4966.png">

### $

The Dollar Sign

```js
// longhand syntax
jQuery('p')

// shorthand syntax
$('p')

// use modern CSS selectors
$('main .title > .sub-title')
```

[jQuery Cheat Sheet](https://oscarotero.com/jquery/) provides us with a list of selector types we can use.  Notice how they are the same as our CSS selectors.

### Lab: jQuery Selectors

Open [exercise/jquery-selectors/index.html](exercise/jquery-selectors/index.html) in your browser. 

Open [exercise/jquery-selectors](exercise/jquery-selectors/) folder in your text editor.

Complete the exercises in [exercise/jquery-selectors/main.js](exercise/jquery-selectors/main.js).  You will see the results in the browser console.

Read more about [jQuery selectors](https://learn.jquery.com/using-jquery-core/selecting-elements/)

## Manipulating the DOM

### Getters

Once we select an element, we may want to get information from it like the text in the element or the value in a form.  jQuery provides us with methods that we can use to get information from an element.

**Example 1**
```html
<h1>Hello World</h1>
```
```js
$('h1').text() // Hello World
```

**Example 2**
```html
<ul>
    <li>Riyadh</li>
    <li>Boston</li>
    <li>Jeddah</li>
</ul>
```
```js
$('ul').html() // ??
```

### Setters

When we select an element, may want to change the information like update the text in the element or add html to an element.  jQuery provides us with methods that we can use to set information of an element.

**Example 1**
```html
<h1>Hello World</h1>
```
```js
$('h1').text('Goodbye World')
```

**Example 2**
```html
<ul>
    <li>Riyadh</li>
    <li>Boston</li>
    <li>Jeddah</li>
</ul>
```
```js
$('ul').html('<li>Home Town</li>') 
```

Notice the pattern of getters and setters.
```js
// GET
$('h1').text()
// SET
$('h1').text('Goodbye World')

// GET
$('ul').html() 
// SET
$('ul').html('<li>Home Town</li>') 
```

Read more about [jQuery DOM manipulation methods](https://learn.jquery.com/using-jquery-core/manipulating-elements/)

[jQuery Cheat Sheet](https://oscarotero.com/jquery/) provides us with a list of manipulation methods we can use.  

Discuss the difference between
- [.text()](http://api.jquery.com/text/)
- [.html()](http://api.jquery.com/html/)
- [.append()](http://api.jquery.com/append/)
- [.prepend()](http://api.jquery.com/prepend/)
- [.after()](http://api.jquery.com/after/)
- [.before()](http://api.jquery.com/before/)

We can also manipulate our html attributes or css properties with jQuery.

**Example 1**
```html
<img src='https://picsum.photos/200/300'>
```
```js
// GET
$('img').attr('src') // 'https://picsum.photos/200/300'

// SET
$('img').attr('src', 'https://picsum.photos/200/100')
```

**Example 2**
```html
<p id='main-text'>Hello World</p>
```
```js
// GET
$('p').attr('id') // 'main-text'

// SET
$('p').attr('id', 'new-class') 
```

Discuss the difference between
- [.attr()](http://api.jquery.com/attr/)
- [.css()](http://api.jquery.com/css/)
- [.addClass()](http://api.jquery.com/addClass/)
- [.removeClass()](http://api.jquery.com/removeClass/)
- [.toggleClass()](http://api.jquery.com/toggleClass/)
- [.hasClass()](http://api.jquery.com/hasClass/)

### Lab: Manipulate the DOM

Open [exercise/jquery-manipulate/index.html](exercise/jquery-manipulate/index.html) in your browser. 

Open [exercise/jquery-manipulate](exercise/jquery-manipulate/) folder in your text editor.

Complete the exercises in [exercise/jquery-manipulate/main.js](exercise/jquery-selectors/main.js).  You will see the results in the browser.

## Additional Resources

- [jQuery API Documentation](https://api.jquery.com/)
- [Live DOM tree viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/)
- [jQuery Reference Cheatsheet](https://oscarotero.com/jquery/)
- [Printable jQuery Cheatsheet](http://htmlcheatsheet.com/jquery/)