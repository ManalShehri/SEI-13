const mongoose = require('mongoose');


const smoothiesSchema = new mongoose.Schema({

    name :{
        type :String , 
        required : true
    } , 
    fruits :[{type : mongoose.Schema.Types.ObjectId , ref : 'fruit'  }]

} , {timestamps :true})

const Smootheis = mongoose.model('smoothie' , smoothiesSchema)

module.exports = Smootheis

