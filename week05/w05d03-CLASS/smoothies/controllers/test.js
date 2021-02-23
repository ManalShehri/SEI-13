const express = require('express')
const router = express.Router()




router.get("/test" , (req,res) =>{


    res.send("this is from test router")
})







module.exports = router