const express = require('express')
const router = express.Router()
const Fruit = require('../models/fruitsModel')

router.get("/", (req, res) => {
    res.render("index");
});

// get all fruits
router.get("/fruits", (req, res) => {

    Fruit.find()
        .then(fruitsDb => {
            console.log(fruitsDb)
            res.render("fruits", { fruits: fruitsDb, type: undefined });
        })
        .catch(err => console.log(err))

});


// create new fruit
router.get("/fruits/new", (req, res) => {
    res.render("new");
});

router.get("/fruits/type/:fruitType", (req, res) => {
    const fruitsByType = fruits.filter(
        (fruit) => fruit.type === req.params.fruitType
    );
    res.render("fruits", { type: req.params.fruitType, fruits: fruitsByType });
});

//==========================================
// get one fruit

router.get("/fruits/:id", (req, res) => {
    var id = req.params.id;
    Fruit.findById(id)
        .then(fruit => {
            res.render("show.ejs", { fruit: fruit });
        })
        .catch(err => console.log(err))

});


// create new fruit 
router.post("/fruits", (req, res) => {

    let newFruit = {
        name: req.body.name,
        color: req.body.color,
        readyToEat: true,
    };
    Fruit.create(newFruit)
        .then(fruit => {
            console.log('fruit hasbeen created', fruit)
            res.redirect("/fruits");
        })
        .catch(err => console.log(err))



});
//=============================================

//  get the update view
router.get("/fruits/:id/edit", (req, res) => {
    const id = req.params.id;

    Fruit.findById(id)
        .then(fruit => {
            res.render("edit", { fruit: fruit });
        }).catch(err => console.log(err))


});

// update action
router.put("/fruits/:id", (req, res) => {
    const id = req.params.id;
    let updateFruit = {
        name: req.body.name,
        color: req.body.color,
        readyToEat: true,
    };
    Fruit.findByIdAndUpdate(id, updateFruit)
        .then(fruit => {
            res.redirect(`/fruits/${fruit._id}`);
        }).catch(err => console.log(err))


});

// ===========================================
//  delete 
router.delete("/fruits/:id", (req, res) => {
    const id = req.params.id;

    Fruit.findByIdAndDelete(id)
        .then(() => {
            res.redirect("/fruits");
        })
        .catch(err => console.log(err))

});









module.exports = router