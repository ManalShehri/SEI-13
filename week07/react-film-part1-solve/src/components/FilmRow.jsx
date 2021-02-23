import React from 'react'

export const FilmRow = (props) => {

    const posterUrl  = 'https://image.tmdb.org/t/p/w780/'

    let year = new Date(props.year)
    return (
        <div className="film-row">
            <img src={posterUrl +props.poster } alt="" />

            <div className="film-summary">
                <h1>{props.title}</h1>
                <p>{year.getFullYear()}</p>
            </div>
        </div>
    )
}
