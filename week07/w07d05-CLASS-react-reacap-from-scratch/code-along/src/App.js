import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import MealCard from "./components/MealCard";

const oneRandomResponse = {
  dateModified: null,
  idMeal: "52866",
  strArea: "Italian",
  strCategory: "Vegetarian",
  strDrinkAlternate: null,
  strIngredient1: "Butternut Squash",
  strIngredient2: "Garlic",
  strIngredient3: "Olive Oil",
  strIngredient4: "Linguine Pasta",
  strIngredient5: "Sage",
  strInstructions:
    "Heat oven to 200C/180C fan/gas 6. Put the squash and garlic on a baking tray and drizzle with the olive oil. Roast for 35-40 mins until soft. Season. Cook the pasta according to pack instructions. Drain, reserving the water. Use a stick blender to whizz the squash with 400ml cooking water. Heat some oil in a frying pan, fry the sage until crisp, then drain on kitchen paper. Tip the pasta and sauce into the pan and warm through. Scatter with sage.",
  strMeal: "Squash linguine",
  strMealThumb:
    "https://www.themealdb.com/images/media/meals/wxswxy1511452625.jpg",
  strMeasure1: "350g",
  strMeasure2: "3 parts ",
  strMeasure3: "3 tbs",
  strMeasure4: "350g",
  strMeasure5: "Small bunch",
  strSource: "https://www.bbcgoodfood.com/recipes/creamy-squash-linguine",
  strTags: "Pasta,Light",
  strYoutube: "https://www.youtube.com/watch?v=xHZ-PoGwTLQ",
};

function App() {
  const [meal, setMeal] = useState(oneRandomResponse);
  console.log("Post State", JSON.stringify(meal));

  console.log("Before useEffect");

  useEffect(() => {
    console.log("Running useEffect");
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => setMeal(response.data.meals[0]))
      .catch((err) => console.log(err));
  }, []);

  console.log("After useEffect");

  return <MealCard meal={meal} />;
}

export default App;
