import React from 'react'
import { Card, Col } from 'react-bootstrap'
// YourName: "H3RO YASIR"
// createdAt: "2021-01-13T12:36:08.271Z"
// history: 2007
// link: "https://cdn-static.egybest.net/serve/movies/art-1983885020-x300.jpg"
// name: "The Dark Knight"
// typee: "Action"
// updatedAt: "2021-01-13T12:36:08.271Z"
export default function OneCardMovie(props) {
    return (
        <Col md="4" sm="4" className="mt-3">
            <Card  className ="card-movie">
                <Card.Img variant="top" src={props.movie.link}  height ="300px" style={{    margin :"auto" , objectFit :"cover"}}  />
                <Card.Body>
                    <Card.Title>{props.movie.name}</Card.Title>
                    <Card.Text>
                        year : {props.movie.history}
                        <br/>
                        type : {props.movie.typee}
                        <br/>
                        <h5 className ="mt-2 text-center" > "{props.movie.YourName}</h5>
                     </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
