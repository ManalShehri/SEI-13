[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)
[![Misk Academy Logo](https://www.miskacademy.edu.sa/app/themes/misk-academy/images/logos.png)](https://www.miskacademy.edu.sa/)

# CSS Grid

### What is CSS-Grid Layout? 

From the [www.w3.org](https://www.w3.org/TR/css-grid-1/) website:

> "Grid Layout is a new layout model for CSS that has powerful abilities to
> control the sizing and positioning of boxes and their contents. Unlike
> Flexible Box Layout, which is single-axis–oriented, Grid Layout is optimized
> for 2-dimensional layouts: those in which alignment of content is desired in
> both dimensions."

With Grid layout, you can divide up the screen into `rows` and `columns` of
sizes of your choosing, and then specify how many rows and columns each `cell`
takes up. Sizing can be fixed, or dynamic, allowing you to create modern
looking, versatile websites.

_Example of **flexbox** layout_

![flex layout example](assets/flex-layout-ex.png)

_example of **grid** layout_

![grid layout example](assets/grid-layout-ex.png)

> Notice that the grid items are aligned (rather than filling up the available
> space) and that cells can take up multiple rows or columns

## You Do: Explore the source code

Let's take a few minutes to
[explore this web app](https://www.inprnt.com/discover/) built with Grid layout.

> This site was built by a former GA student using CSS Grid, Flexbox, and React.

There are a few ways to implement css grid. I'll show you the steps of how I
like to do it.

Feel free to code along in codepen.

1. To start, you must have a _container_ (or _parent_) element, with at least
   one _nested_ (or _child_) elements inside.

```html
<div class="parent">
  <div class="child child-one">1</div>
  <div class="child child-two">2</div>
  <div class="child child-three">3</div>
</div>
```

2. On the container, specify that you are using `display: grid` and what your
   **_template_** will look like - more specifically, your **_rows_** and
   **_columns_**. Here's an example.

```css
.parent {
  display: grid;
  grid-template-rows: 100px 200px 300px;
  grid-template-columns: 100px 1fr 2fr 100px;
}
```

`fr` represents `fraction`, it's a unit that will evenly span the remainder of
the space.

Here we have specified **_3 rows_**, taking up 100, 200, and 300 pixels
respectively. We also specified **_4 columns_**, giving us a total of **_12
cells_**. `grid-template` also takes other units like `%`, `rem`, and `auto`.
For now we will focus on `px` and `fr` units. You can also use `repeat` to
specify multiple rows or columns of one size like this `repeat(5, 1fr)`

3. the _child_ elements, you can specify _where_ the _cells_ are located and the
   _size_ you want them to be. I like to follow this pattern:

```css
selector {
  grid-row: where-to-start / span size;
}
```

> same would work for `grid-column`

So something like this on a _child_ element:

```css
.child-one {
  grid-row: 1 / span 1;
  grid-column: 1 / span 2;
}
```

This element takes up 1 row, starting at row 1, and takes up 2 columns, starting
at column 1.

We could also write `grid-row: 1;` for short, if your element only spans 1 row.

### You do: Griddle me this

Now let's follow along and try to make our _holy grail_ website design using
Grid layout. We will need a header, a footer, two side columns, and a main
section. The starter code has been set up for you
[here](https://codepen.io/perryf/pen/rJNZpw)

Using the grid concepts we just learned, see if you can spend a few minutes
getting the holy grail layout built.

> Try it! Don't read ahead! We'll go over it next.

### We do: Griddle me this 

Now let's add our `grid-template` code to our parent element.

```css
body {
  display: grid;
  grid-template-rows: 80px 1fr 80px;
  grid-template-columns: 100px 1fr 100px;
}
```

Now let's figure out how to format our `header`. We want the header to take up 1
row and 3 columns. Let's give it some color too.

```css
header {
  grid-row: 1;
  grid-column: 1 / span 3;
  background: steelblue;
}
```

Now onto our left column. That will only take up 1 column and one row, starting
at row 2.

```css
.left {
  grid-row: 2;
  grid-column: 1;
  background: lightseagreen;
}
```

The right column can be positioned in a very similar fashion.

```css
.right {
  grid-row: 2;
  grid-column: 3;
  background: mistyrose;
}
```

The main section is the largest section (except on tiny screens) but really only
takes up one row and one column.

```css
main {
  grid-row: 2;
  grid-column: 2;
  background: lemonchiffon;
}
```

Lastly, our footer will take up the entire bottom row, spanning 3 columns.

```css
footer {
  grid-row: 3;
  grid-column: 1 / span 3;
  background: rebeccapurple;
}
```

Solution on [codepen](https://codepen.io/jme11/pen/OJVaywa)

## You Do: [CSS Grid Art](../../../css-grid-art) 

Check out the link and work through it for the next 20 minutes.

## Autofit Content in a Grid

One additional problem that CSS Grid solves for us is the ability to autofit content into a grid without using media queries.  This is something that you'll like do a lot of in this program.  Let's take a look at an example together:

[Example](https://codepen.io/jme11/pen/jOEdPJb?editors=1100)

## Closing / Questions

You don't have to pick between flexbox and grid. You can use both on the same
page, in different elements.

You can even use one inside of the other! A common practice is to use Grid for
the page layout, and flexbox for smaller page components.

- Why is alignment so important with modern web development?
- What problems do flexbox and css grid solve?
- Where do I put `display: flex` or `display: grid`?
- With flexbox, what are some properties that `justify-content` can take?
- Explain how to place an item into a grid container.

## Additional Practice

- [Flexbox Froggy](http://flexboxfroggy.com/) (10 min / 3:55)
- [CSS Grid Garden](http://cssgridgarden.com/)
- [Hyrule Potion Shop](https://git.generalassemb.ly/ga-wdi-exercises/hyrule_potion_shop)
  (10 min / 4:10)

## Resources

- [flexbox.io](https://flexbox.io/)
- [The Ultimate Flexbox Cheatsheet](http://www.sketchingwithcss.com/samplechapter/cheatsheet.html)
- [CSS Tricks Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [A Visual Guide to CSS3 Flexbox Properties](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)
- [Solved by Flexbox](http://philipwalton.github.io/solved-by-flexbox/)
- [Flexplorer](http://bennettfeely.com/flexplorer/)
- [Holy Grail Layout - Solved By Flexbox](https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/)
- [The CSS `grid` Module](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Wes Bos Teaches CSS-Grid](http://wesbos.com/announcing-my-css-grid-course/)
- [Learn CSS Grid](http://learncssgrid.com/)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
