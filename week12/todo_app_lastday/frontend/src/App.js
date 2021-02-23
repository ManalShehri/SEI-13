import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Row, Col, Container, Form, Button
} from 'react-bootstrap';
import Task from './Task';
import { useEffect, useState } from 'react'
import axios from 'axios'
// path('tasks/',
// path('tasks/<int:pk>'
// path('tasks/create'
// path('tasks/<int:pk>/update' 
// path('tasks/<int:pk>/delete'
function App() {
  const [tasks , setTasks] = useState([])
  const [title , setTitle] = useState("")
  const [changeTasks , setChaneTasks] = useState(false)

  useEffect(() => {
    axios.get('/api/tasks')
    .then(data=>setTasks(data.data))
    .catch(err=> console.log(err))

  }, [changeTasks])

  const addTask = (e) =>{
    e.preventDefault()
    axios.post('/api/tasks/create' , {title:title , completed : false})
    .then(data =>setChaneTasks(pre => !pre))
    .catch(err => console.log(err))


  }

  return (
    <div className="App">
      <Container className="bg-light mt-5 pt-5 pb-5">
        <Row className="justify-content-md-center mb-3">
          <Form onSubmit ={addTask}>
            <Form.Label>
              <h4>add your task</h4> 
          </Form.Label> 
              <Row>
                <Col md="10" lg="10">
                  <Form.Control onChange={({target}) => setTitle(target.value) }>

                  </Form.Control>
                </Col>
                <Col md="2" >
                  <Button type="submit" variant="success"> add </Button>
                </Col>
              </Row>    
          </Form>
        </Row>
      {tasks.map(ele => <Task {...ele} setChaneTasks={setChaneTasks} />)}
        
      </Container>
    </div>
  );
}

export default App;
