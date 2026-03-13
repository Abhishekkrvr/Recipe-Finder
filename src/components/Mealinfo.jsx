import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const Mealinfo = () => {
  const { mealid } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [info, setInfo] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`,
      );
      const data = await res.json();
      setInfo(data.meals[0]);
    };

    getInfo();
  }, [mealid]);

  if (!info) {
    return <h2 className="msg">Loading...</h2>;
  }

  /* Extract Ingredients */
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = info[`strIngredient${i}`];
    const measure = info[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  /* Split instructions into steps */
  const steps = info.strInstructions
    .split(".")
    .filter((step) => step.trim() !== "");

  return (
    <div className="mealInfo">
      <button
        className="backBtn"
        onClick={() => navigate(location.state?.from || "/")}
      >
        Back
      </button>

      <img src={info.strMealThumb} alt={info.strMeal} />

      <div className="info">
        <h1>{info.strMeal}</h1>

        <h3>Ingredients</h3>

        <ul className="ingredients">
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Instructions</h3>

        <ol className="instructions">
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Mealinfo;
