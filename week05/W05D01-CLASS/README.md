# Mongoose



## Mongoose - elegant mongodb object modeling for node.js (ODM - Object Document Mapper)
As said earlier MongoDB is Schemaless but to make data consistent we need mongoose.

Just like in Rails, we can use mongoose to create models so that the controller can access the models to enusure data integrity.

(Mongoose Docs)[https://mongoosejs.com/docs/index.html]

To start mongodb run `mongod`

lets start off by install mongoose in our node application.

```javascript
$ npm install mongoose --save

```

```
 var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var blogSchema = new Schema({
    title:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
  });
```

Fields can have any of the following data types:
- String
- Number
- Date
- Buffer
- Boolean
- Mixed
- ObjectId
- Array



```javascript

var blogSchema = new Schema({
    title:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: { //embedded Object
      votes: Number,
      favs:  Number
    }
  },{timestamps: true});


const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
```


> In Class Lab
[Mongoose Lab](mongoose_lab.md)


## Connect Express to Mongo

1. `npm install mongoose`
1. Inside server.js:

```javascript
const mongoose = require('mongoose');

//... and then farther down the file
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});
```

## Create Fruits Model

1. `mkdir models`
1. `touch models/fruits.js`
1. Create the fruit schema

```javascript
const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    color:  { type: String, required: true },
    readyToEat: Boolean
});

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;
```

## Have Create Route Create data in MongoDB

Inside server.js:

```javascript
const Fruit = require('./models/fruits.js');
//... and then farther down the file
app.post('/fruits/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit)=>{
        res.send(createdFruit);
    });
});
```

## Create Index Route

```javascript
app.get('/fruits', (req, res)=>{
    res.send('index');
});
```

`touch views/index.ejs`

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <h1>Fruits index page</h1>
    </body>
</html>
```

Render the ejs file

```javascript
app.get('/fruits', (req, res)=>{
    res.render('index.ejs');
});
```

## Have Index Route Render All Fruits

```javascript
app.get('/fruits', (req, res)=>{
    Fruit.find({}, (error, allFruits)=>{
        res.render('index.ejs', {
            fruits: allFruits
        });
    });
});
```

Update the ejs file:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <h1>Fruits index page</h1>
        <ul>
            <% for(let i = 0; i < fruits.length; i++){ %>
                <li>
                    The <%=fruits[i].name; %> is  <%=fruits[i].color; %>.
                    <% if(fruits[i].readyToEat === true){ %>
                        It is ready to eat
                    <% } else { %>
                        It is not ready to eat
                    <% } %>
                </li>
            <% } %>
        </ul>
    </body>
</html>
```

Add a link to the create page:

```html
<nav>
    <a href="/fruits/new">Create a New Fruit</a>
</nav>
```

## Have Create Route redirect to Index After Fruit Creation

Inside the create route

```javascript
Fruit.create(req.body, (error, createdFruit)=>{
    res.redirect('/fruits');
});
```

## Have Index Page Link to Show Route

```html
<li>
    The
    <a href="/fruits/<%=fruits[i].id; %>">
        <%=fruits[i].name; %>
    </a>
    is  <%=fruits[i].color; %>.
    
    <% if(fruits[i].readyToEat === true){ %>
        It is ready to eat
    <% } else { %>
        It is not ready to eat
    <% } %>
</li>
```

## Create Show Route

```javascript
app.get('/fruits/:id', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{
        res.send(foundFruit);
    });
});
```

## Create show.ejs

1. `touch views/show.ejs`
1. Add HTML

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
<<<<<<< HEAD
        <title>Edit a Fruit</title>
    </head>
    <body>
      <h1>Edit Fruit Page</h1>
      <form action="/fruits/<%=index%>?_method=PUT" method="POST">
        <label for="name">Name</label>
        <input type="text" name="name" id="name"/>
        <label for="color">Color</label>
        <input type="text" name="color" id="color" />
        <label for="isReadyToEat">Is Ready to Eat</label>
        <input type="checkbox" name="readyToEat" id="isReadyToEat" />
        <input type="submit" value="Edit Fruit">
      </form>
=======
        <title></title>
    </head>
    <body>
        <h1>Fruits show page</h1>
        The <%=fruit.name; %> is  <%=fruit.color; %>.
        <% if(fruit.readyToEat === true){ %>
            It is ready to eat
        <% } else { %>
            It is not ready to eat
        <% } %>
        <nav>
            <a href="/fruits">Back to Fruits Index</a>
        </nav>
>>>>>>> df96debc9149df338de71572601c84d9e510a76c
    </body>
</html>
```

<<<<<<< HEAD
What is frustrating, is that our users have to remember which fruit they clicked on and update/reenter all the values.

We should at least set values in the form for the user to update

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Edit a Fruit</title>
    </head>
    <body>
      <h1>Edit Fruit Page</h1>
      <form action="/fruits/<%=index%>?_method=PUT" method="POST">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" value="<%=fruit.name%>"/>
        <label for="color">Color</label>
        <input type="text" name="color" id="color" value="<%=fruit.color%>"/>
        <label for="isReadyToEat">Is Ready to Eat</label>
        <input type="checkbox" name="readyToEat" id="isReadyToEat"
        <% if(fruit.readyToEat === true){ %>
  				checked
  			<% } %>
        />
        <input type="submit" value="Edit Fruit">
      </form>
    </body>
</html>
```
=======
Render the ejs

```javascript
app.get('/fruits/:id', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{
        res.render('show.ejs', {
            fruit:foundFruit
        });
    });
});
```

(Start Driver Management)[driver.md]
>>>>>>> df96debc9149df338de71572601c84d9e510a76c
