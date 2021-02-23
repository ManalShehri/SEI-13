import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function OneCardMovie(props) {

    
    return ( <>
        {props.movie && 
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
                        <h5 className ="mt-2 text-center" > {props.movie.YourName}</h5>
                     </Card.Text>
                     <Row >
                     <Col md={!props.delete? "12" : "5"}>
                    
                    <Link to={`/movies/${props.movie._id}`}> <Button onClick={()=>props.delete ? "" : props.setSelectMovie(props.movie)}> more info</Button> </Link> 
                    </Col>
                    <Col md="3">
                    {props.delete && <Button 
                    onClick={()=> props.deleteMovei(props.movie._id)}
                    className="btn-danger" >delete </Button> }
                    </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>}
        </>
    )
}
