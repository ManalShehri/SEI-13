const express = require('express');
const router = express.Router()




router.get('/singUp' , (req,res) =>{


    res.render('signUp')
})

router.get('/login' , (req,res) =>{

        res.render('logIn')

})
// the view of home page 
router.get('/home' , (req,res) =>{

    res.render('home')

})
// profile view
router.get('/profile' , (req,res) =>{

    res.render('profile')
 
})
router.get('/search' , (req,res) =>{

    res.render('search')
 
})
router.get('/followers' , (req,res) =>{

    res.render('followers')
 
})
router.get('/follwing' , (req,res) =>{

    res.render('follwing')
 
})










module.exports = router