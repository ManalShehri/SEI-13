import React, { useState, useEffect } from "react";
import "./App.css";
import On from "./On";
import Off from "./Off";

function App() {
  const [light, setLight] = useState("on");
  const [flavor, setFlavor] = useState("Mint Chocolate Chip");
  const [color, setColor] = useState();

  const flipSwitch = () => {
    if (light === "on") {
      setLight("off");
    } else {
      setLight("on");
    }
  };

  const flipFlavor = () => {
    if (flavor === "Mint Chocolate Chip") {
      setFlavor("Strawberry");
    } else {
      setFlavor("Mint Chocolate Chip");
    }
  };

  // This useEffect w NO second argument fires when the page is loaded
  // and also every time a piece of state is updated

  useEffect(callBackOnLoadAndUpdate); // Combination of ComponentDidMount and ComponentDidUpdate

  const callBackOnLoadAndUpdate = () => {
    console.log("hello world");
    console.log(
      "I am going to fire every time the page is loaded or component state is updated"
    );
  };

  // This useEffect with an empty []array as the second argument,
  // only fires upon page load/ component being mounted

  useEffect(callBackOnlyOnLoad, []); // Equal to ComponentDidMount

  const callBackOnlyOnLoad = () => {
    console.log("I fire upon component mount on first page load");
  };

  // This useEffect fires upon page load, AND whenever the value(s)
  // in the second argument array state has changed
  useEffect(callBackOnConditionUpdate, [flavor]); // Equal to ComponentShouldUpdate

  const callBackOnConditionUpdate = () => {
    console.log("hello from flavor town");
  };

  const getColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    fetch(`http://www.thecolorapi.com/id?rgb=${r},${g},${b}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setColor(res);
      });
  };

  // useEffect to fetch API on page load
  useEffect(() => {
    getColor();
  }, []);

  return (
    <div className="App">
      {light === "on" ? <On light={light} /> : <Off dark={light} />}
      <button onClick={flipSwitch}>Flip Switch</button>

      <h1>{flavor}</h1>
      <button onClick={flipFlavor}>Flip Flavor</button>

      {/*   {color ? <img src={color.image.named} /> : null} 
      <br />
      <button onClick={getColor}>Get Color</button>*/}
    </div>
  );
}

export default App;
