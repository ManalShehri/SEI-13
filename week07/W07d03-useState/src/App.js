import { useState } from 'react'
import './App.css';
import Students from './Students';

import Test from './Test';


function App() {
  // state 

  let [count, setCount] = useState(0)
  let [name, setName] = useState("Yasir")
  let [students, setStudents] = useState(["Raneen", "Abdullah", "Sarah", "Nouf"])


  // functional


  const increase = () => {
    setStudents(students.map(ele => ele.toUpperCase()))
    setName('Manal') // name = "Manal"
    setCount(count + 1) // count = count +1

  }


  const decrease = () => {

    setCount(count - 1)
    setName('Ali')
  }

  console.log("render")


  let allStudents = students.map(ele =>{


    return <Students name ={ele} />
  })

  // jsx


  return (
    <div className="App">
      <button onClick={increase}> crazy</button>

      <h2> Students List</h2>
      <ul>
      {allStudents}
     
      </ul>
    </div>
  );
}

export default App;
