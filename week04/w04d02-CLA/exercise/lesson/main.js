console.log("JS Ready!");

const url = "https://pokeapi.co/api/v2/pokemon/7";

const handlePokeApiRes = (pokemon) => {
  document.getElementById("pokemon-name").append(pokemon.name);
  const p1Indexes = pokemon.game_indices.map(indexesToP1);
  p1Indexes.forEach((index) => {
    document.body.append(index);
  });
};

const indexesToP1 = (gameIndex) => {
  const tempHtml = document.createElement("p");
  tempHtml.innerText = gameIndex.version.url;
  return tempHtml;
};

fetch(url)
  .then((res) => res.json())
  .then(handlePokeApiRes)
  .catch((err) => console.log("something went wrong...", err));
