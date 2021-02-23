import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Show() {
  const [birds, setBirds] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    fetch("https://audubon-api.herokuapp.com/api/birds")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setBirds(json);
      });
  }, []);

  const bird = birds.find((bird) => bird.name == name);

  return (
    <>
      {bird ? (
        <div>
          <img src={bird.image} alt={bird.name} />
          <h2>{bird.name}</h2>
          <i>{bird.genus}</i>

          <h3>Conservation status</h3>
          <p>{bird.conservationStatus}</p>

          <a href={bird.homepage}>Read More</a>
        </div>
      ) : (
        <h1>Loading content ...</h1>
      )}
    </>
  );
}
