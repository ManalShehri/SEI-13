import React from 'react'
import { FilmRow } from './FilmRow'

export const FilmListing = (props) => {

    console.log("films" , props.films)

    const allFilms = props.films.map(film =>{


        return <FilmRow 
        title = {film.title}  
        year = {film.release_date}    
        poster = {film.poster_path} />
    })

    return (
        <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {allFilms}

        
       
      </div>
    )
}
