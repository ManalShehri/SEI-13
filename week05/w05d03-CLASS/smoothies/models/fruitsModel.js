const mongoose = require('mongoose')


const fruitScema = new mongoose.Schema({

    name :String ,
    color :String ,
    readyToEat : Boolean


} , {timestamps :true})

const Fruit = mongoose.model('fruit' , fruitScema)
// to export fruit model
module.exports = Fruit




