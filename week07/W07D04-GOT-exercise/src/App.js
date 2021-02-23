
import './App.css';
import { useState, useEffect } from 'react'








function App() {
  const [houses, setHouses] = useState([])
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    // effect

    
  }, [])




  return (
    <div>
      <h1>Characters</h1>
    
      <div className="clear"></div>
      <h1>Houses</h1>
   
    </div>
  );
}

export default App;
