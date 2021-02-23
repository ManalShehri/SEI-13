
import './App.css';
import { useEffect, useState } from 'react'
import Axios from 'axios'
import Images from './Images';


const options = {
  method: 'GET',
  url: 'https://giphy.p.rapidapi.com/v1/stickers/search',
  params: { api_key: '8CDPMFI8M2ldtz45zYkkkvHCLukc4okW', q: '' },
  headers: {
    'x-rapidapi-key': 'be5262c86cmshffc0c64480e9b2dp1f91f2jsn869a8cd2347e',
    'x-rapidapi-host': 'giphy.p.rapidapi.com'
  }
};

function App() {
  // data.data[1].images.original.url
  // render

  const [name, setName] = useState("Yasir")
  const [age, setAge] = useState(21)
  const [search, setSearch] = useState("")
  const [imgs, setImgs] = useState([])
  const [value, setValue] = useState("")


  useEffect(() => {
    // 
    options.params.q = search
    Axios.request(options)
      .then(response => {

        setImgs(response.data.data)
      })

    // setName("Suliman")
    console.log("render from useEffect")

  }, [search])



  const allImgs = imgs.map(ele => {

    return <Images url={ele.images.original.url} />
  })

  let changeValueHandler = (e) => setValue(e.target.value)

  let onSubmitHandler = (e) => {
    e.preventDefault()
    setSearch(value)
  }

  return (
    <div className="App">
      <h1> {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => name == "Ali" ? setName("Yasir") : setName("Ali")}> change name</button>
      <button onClick={() => age == 26 ? setAge(23) : setAge(26)}> change Age</button>
      <div style={{ display: "flex", width: "100%", justifyContent: "center", marginBottom: "10px" }} >
        <button onClick={() => setSearch("nareto")} > Naruto </button>
        <button onClick={() => setSearch("one piece")} > one piece </button>
        <button onClick={() => setSearch("attack on titan")}>attack on titan</button>
      </div>
      {/* input and form  */}
      <div style={{ display: "flex", width: "100%", justifyContent: "center", marginBottom: "10px" }} >
        <form onSubmit={onSubmitHandler}>
          <input value={value} type='text' onChange={changeValueHandler} />
          <button type='submit' onClick={onSubmitHandler} > Search !</button>
        </form>

      </div>
      <div className="images">
        {allImgs}

      </div>

    </div>
  );
}

export default App;
// {"success":1,"book":{"titles":["Lord Commander of the Night's Watch"],"spouse":[],"children":[],"allegiance":["House Stark","Night's Watch"],"books":["A Game of Thrones","A Clash of Kings","A Storm of Swords","A Feast for Crows","A Dance with Dragons"],"plod":0,"longevity":[],"plodB":0,"plodC":0,"longevityB":[],"longevityC":[],"name":"Jon Snow","slug":"Jon_Snow","gender":"male","image":"https://awoiaf.westeros.org/thumb.php?f=Cristi_Balanescu_Jon_SnowGhost.png&width=300","culture":"Northmen","house":"House Stark","birth":283,"alive":true,"pagerank":{"title":"Jon_Snow","rank":1507}},"show":{"titles":["Warden","King in the North","Lord Commander of the Night's Watch"],"origin":["Tower of Joy","Winterfell"],"siblings":["Rhaenys Targaryen ","Aegon Targaryen ","Robb Stark","Sansa Stark","Arya Stark","Bran Stark","Rickon Stark"],"spouse":[],"lovers":["Daenerys Targaryen","Ygritte"],"plod":0,"longevity":[],"plodB":0,"plodC":0,"longevityB":[],"longevityC":[],"culture":["Northmen"],"religion":["Old Gods of the Forest"],"allegiances":["House Stark"],"seasons":[],"appearances":["Winter Is Coming"],"name":"Jon Snow","slug":"Jon_Snow","image":"https://vignette.wikia.nocookie.net/gameofthrones/images/d/d3/JonSnowSeason8HB.jpg/revision/latest/scale-to-width-down/333?cb=20190401173347","gender":"male","alive":true,"birth":281,"mother":"Lyanna Stark","father":"Rhaegar Targaryen","house":"House Stark","first_seen":"Winter is Coming\"","actor":"Kit Harington","related":[{"alive":true,"name":"Sansa Stark","slug":"Sansa_Stark","mentions":95},{"alive":false,"name":"Mance Rayder","slug":"Mance_Rayder","mentions":91}],"pagerank":{"title":"Jon_Snow","rank":1775},"age":{"name":"Jon Snow","age":33}}}
