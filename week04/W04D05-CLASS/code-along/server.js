const express = require("express");
const app = express();

const methodOverride = require("method-override");
const fruits = require("./models/fruits");

app.set("view engine", "ejs");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});
// get all fruits
app.get("/fruits", (req, res) => {
  res.render("fruits", { fruits: fruits, type: undefined });
});

// create new fruit
app.get("/fruits/new", (req, res) => {
  res.render("new");
});

app.get("/fruits/type/:fruitType", (req, res) => {
  const fruitsByType = fruits.filter(
    (fruit) => fruit.type === req.params.fruitType
  );
  res.render("fruits", { type: req.params.fruitType, fruits: fruitsByType });
});
// get one fruit

app.get("/fruits/:id", (req, res) => {
  var id = req.params.id;
  res.render("show.ejs", { fruit: fruits[id] });
});

app.post("/fruits", (req, res) => {
  console.log(req.body.isReadyToEat);

  let newFruit = {
    name: req.body.name,
    color: req.body.color,
    isReadyToEat: req.body.isReadyToEat,
  };
  console.log(newFruit);
  fruits.push(newFruit);

  res.redirect("/fruits");
});

app.get("/fruits/:indexOfFruitsArray/edit", (req, res) => {
  const fruitIndex = req.params.indexOfFruitsArray;
  res.render("edit", {
    fruit: fruits[fruitIndex],
    fruitIndex,
  });
});

app.put("/fruits/:indexOfFruitsArray", (req, res) => {
  const fruitIndex = req.params.indexOfFruitsArray;
  const { name, color, isReadyToEat } = req.body;
  const fruit = fruits[fruitIndex];
  Object.assign(fruit, { name, color, isReadyToEat });

  res.redirect(`/fruits/${fruitIndex}`);
});

app.delete("/fruits/:indexOfFruitsArray", (req, res) => {
  const fruitIndex = req.params.indexOfFruitsArray;
  fruits.splice(fruitIndex, 1);
  res.redirect("/fruits");
});

app.listen(4000, () => console.log("server is running"));
