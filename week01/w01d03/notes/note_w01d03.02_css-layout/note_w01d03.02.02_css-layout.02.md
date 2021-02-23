Title: Fluid Layout and Floats <br>
Duration: "0:45"<br>
Creator: Karolin Rafalski
Competencies: CSS <br>
Prerequisites: Basic HTML, CSS

---
# CSS - Fluid Layout and Floats - Part Two

 ### Box Sizing

 By default, most the size of elements are measured by their content only. Padding, borders, and margins are not considered in the calculations.

Rather than trying to figure out the exact size of each of these elements, you can change how the size of the elements are measured by changing the `box-sizing` property.

```css
.half, .third {
  background: ghostwhite;
  display: inline-block;
  width: 49%;
  padding: 2%;
  box-sizing: border-box;
}
```

![fixed unexpected sizing with box-sizing property](https://i.imgur.com/tr3vFqA.png)

Super! But why is Najee's dream now being 'pushed' downwards?

### Vertical Alignment of Inline-block Elements

Many times, as you add to elements it pushes other elements away. But in this case, if we look carefully, Najee's dream container (class: `third`), aligns perfectly with the bottom of Salina's dream


 ![fixed unexpected sizing with box-sizing property ](https://i.imgur.com/tr3vFqA.png)

This is because the default is for it to be aligned with the bottom. Let's change it to be aligned with the top

```css
.half, .third {
  background: ghostwhite;
  display: inline-block;
  width: 49%;
  padding: 2%;
  box-sizing: border-box;
  vertical-align: top;
}
```

 ![aligned element to top, rather than bottom ](https://i.imgur.com/H2eMGbi.png)

 ### Applying Styles to Another Element

We have been able to compare and contrast how the floated image has affected the divs with a class of half, but now we also want to apply the same styles to the images with a class of third:

```css
.half > img , .third > img {
  max-width: 50%;
  float: left;
  margin-right: 5%;
}
```
Expected Appearance:

![applied same styles to images in divs with a class of `third`](https://i.imgur.com/NQHosLd.png)


### Changing Styles Between Similar Elements

We really like the styles we added to our divs. But we have three with a class of third, that we would like to have a width of 32%.

We can set that easily, if we override the rule where it is set at 49%. We just have to select the class of third and change it below the initial rule.

Najee's dream is the shortest, but we also want his `div` to be just as big as Salina and Luis's dreams. Let's set a min-height of 280px too

```css
.third {
  width: 32%;
  min-height: 280px;
}
```


Expected Appearance:
![applied same styles to images in divs with a class of `third`](https://i.imgur.com/3I03AG5.png)

### Polishing Our Site (and review)

Let's update our site with some fonts, colors, margins and more to remind ourselves of what we've learned in past units and give our site a more polished look.

First up, let's comment out our gold borders

```css
/* * {
  border: 1px solid gold;
} */
```

Let's add bottom margins to our divs with classes of `half` and `third`

```
.half, .third {
  background: ghostwhite;
  display: inline-block;
  width: 49%;
  padding: 2%;
  box-sizing: border-box;
  vertical-align: top;
  margin-bottom: 16px;
}
```
Expected Appearance:

![removed universal border and updated margin bottom for divs](https://i.imgur.com/t1b6q4B.png)

Let's add some google fonts and style our fonts

```css
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Poiret+One');

body {
  background: #255C7D;
  font-family: 'Poiret One', cursive;
  color: steelblue;
}

h1, h2 {
  font-family: 'Comfortaa', cursive;
  color: black;
}

h2, h4 {
  text-align: center;
}

p {
  text-align: justify;
}

```
Expected Appearance:

![Updating font styles](https://i.imgur.com/p08wUtt.png)

Almost there! Remember most text elements (`h1`- `h6` , `p` have a default display of `block`). Let's change that for our navigation area.

```css
nav > h1 {
  display: inline;
  font-size: 3em;
}

nav > h3 {
  display: inline-block;
  width: 15%;
  text-align: right;
  color: ghostwhite;
}
```


###  Now Add the following css

```css

html {
  background: #255C7D;
}

body {
  background: #255C7D;
  font-family: 'Poiret One', cursive;
  color: steelblue;
  background: linear-gradient( #f8B195 5%, #f67280 10%, #C06C84 20%, #6C5B7B 30%, #255C7D);
  margin: 0;
}
```

Great! You can now expand and shrink your browser and see that this site looks pretty good for a variety of sizes. It still breaks when it gets too narrow or too wide, that's ok! We're going to learn even more about making a page look good at all sizes in later lessons.  

Expected Appearance:

![Finished look](https://i.imgur.com/RwtDWJd.png)


----------------------------------

References:

[Can I use](https://caniuse.com/)

[Should I prefix](http://shouldiprefix.com/)

[Pleaeease.io](http://pleeease.io/play/)

[All About Floats](https://css-tricks.com/all-about-floats/)

[Solving Clearfix](https://css-tricks.com/snippets/css/clear-fix/)

[linear gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient)
