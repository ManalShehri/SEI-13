const express = require("express");
const router = express.Router();
const User = require("../models/user");


// add one movie to favorite movie
// /api/movie 
router.post("/", (req, res) => {

    let movieId = req.body.moveiId
    let userId = req.body.userId
    console.log(movieId)



    User.findByIdAndUpdate(userId, { $addToSet: { favoriteMovies: movieId } }, { new: true })
        .then(user => {


            res.json({ msg: "movie added to your favorite Movies", favoriteMovies: user.favoriteMovies })


        })

})


router.delete('/:movieId/:userId', (req, res) => {
    let movieId = req.params.movieId
    let userId = req.params.userId

    User.findById(userId)
        .then(user => {
            let favoriteMovies = user.favoriteMovies.filter(movie => {

                return !(movie == movieId)
            })
            console.log(favoriteMovies.length)

            User.findByIdAndUpdate(userId, { favoriteMovies: favoriteMovies }, { new: true })
                .then(updateUser => {
                    res.json({ msg: "movie delete to your favorite Movies", favoriteMovies: updateUser.favoriteMovies })
                })
        })
    // 
    // User.findByIdAndUpdate(userId , {$pull :{favoriteMovies :favoriteMovies}})
    // .then(user =>{
    //     res.json({msg : "movie delete to your favorite Movies" , favoriteMovies : user.favoriteMovies})
    // })

})








module.exports = router;