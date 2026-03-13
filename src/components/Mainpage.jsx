import React, { useState, useEffect } from "react";
import Mealcards from "./Mealcards";

const Mainpage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const savedMeals = localStorage.getItem("meals");
    const savedSearch = localStorage.getItem("search");

    if (savedMeals) {
      setData(JSON.parse(savedMeals));
    }

    if (savedSearch) {
      setSearch(savedSearch);
    }
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const myFun = async () => {
    if (search.trim() === "") {
      setMsg("Please enter a dish name😋");
      return;
    }

    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
    );

    const jsonData = await res.json();

    if (!jsonData.meals) {
      setMsg("No recipe found");
      setData([]);
    } else {
      setData(jsonData.meals);
      setMsg("");

      localStorage.setItem("meals", JSON.stringify(jsonData.meals));
      localStorage.setItem("search", search);
    }
  };

  return (
    <>
      <h1 className="head">Purple Plate</h1>

      <div className="container">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search for a dish"
            value={search}
            onChange={handleInput}
          />

          <button onClick={myFun}>Search</button>
        </div>

        <h4 className="msg">{msg}</h4>

        <Mealcards detail={data} />
      </div>
    </>
  );
};

export default Mainpage;
