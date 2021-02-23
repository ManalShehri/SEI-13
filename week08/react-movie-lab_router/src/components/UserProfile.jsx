import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Route, Redirect } from "react-router-dom";
import OneCardMovie from "./OneCardMovie";
import axios from 'axios'

export default function UserProfile(props) {
  const [alluserMovies, setAluserMovies] = useState([])
  const [changeuseEffect, setChangeuseEffect] = useState(false)
  const { name, email, _id } = props.auth.currentUser;

  
  useEffect(() => {
    axios.get('https://sei12.herokuapp.com/movei/json')
      .then(data => {
        // 
        let favoriteMovies = localStorage[_id]
        console.log(favoriteMovies)
        let filtermovies = data.data.filter(movie => favoriteMovies.includes(movie._id))
        setAluserMovies(filtermovies)
      })

  }, [changeuseEffect])
  const deleteMovei = (movieId) => {
    let userId = _id
    axios.delete(`http://localhost:5000/api/movies/${movieId}/${userId}`)
      .then(data => {
        localStorage[_id] = JSON.stringify(data.data.favoriteMovies)
        console.log(localStorage[_id])
        setChangeuseEffect(!changeuseEffect)
      })


  }

  const allfavoriteMovies = alluserMovies.map(movie => <OneCardMovie deleteMovei={deleteMovei} movie={movie} delete={true} />)
  return <> <h1> name :{name} </h1>
    <h1> email : {email} </h1>
    <h1> favorite Movies : </h1>

    <Container>
      <Row >
        {allfavoriteMovies}
      </Row>

    </Container>
  </>

}
