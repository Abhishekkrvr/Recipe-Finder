import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function MealCards({ detail }) {
  const location = useLocation();

  return (
    <div className="meals">
      {!detail
        ? ""
        : detail.map((curItem) => {
            return (
              <div className="mealImg" key={curItem.idMeal}>
                <img src={curItem.strMealThumb} alt={curItem.strMeal} />

                <p>{curItem.strMeal}</p>

                <NavLink
                  to={`/${curItem.idMeal}`}
                  state={{ from: location.pathname }}
                  className="viewBtn"
                >
                  View Recipe
                </NavLink>
              </div>
            );
          })}
    </div>
  );
}

export default MealCards;
