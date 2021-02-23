import React from 'react'
import {
    Row, Col, Container, Form, Button
} from 'react-bootstrap';
import axios from 'axios'
// path('tasks/<int:pk>/update' 


export default function Task({title , id , completed , setChaneTasks}) {


    const updateTask =()=>{
        axios.put(`/api/tasks/${id}/update` , {title:title ,completed : !completed})
        .then(() => setChaneTasks(pre => !pre))
        .catch(err => console.log(err))
    }
    const deleteTask =()=>{
        axios.delete(`/api/tasks/${id}/delete`)
        .then(() => setChaneTasks(pre => !pre))
        .catch(err => console.log(err))
    }
    return (
        <Row className="justify-content-md-center pt-2 pb-2 ">
            <Col md="4" className="bg-dark">

                {!completed ?   <h3 style={{ color: "wheat" }}>  {title}</h3>
                : 
                <h3 style={{ color: "green" , textDecoration :"line-through"}}>  {title}</h3>
            }
              
            </Col>

            <Col md="4" className="bg-dark pt-2 pb-2 ">
                <Button variant="outline-light" className ="mr-2"
                onClick={updateTask}
                >
                    done
            </Button>
                <Button onClick={deleteTask} variant="outline-danger">
                    delete
            </Button>
            </Col>
        </Row>
    )
}
