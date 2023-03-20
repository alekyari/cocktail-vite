import DrinkCard from "../drinkCard";
import { useState, useEffect } from "react";
import { filteredList } from "../../utils/funcs";
import { GET } from "../../utils/http";
import "./index.scss";

const Content = ({category}) => {
  const [cocktailList, setCocktailList] = useState([]);
  useEffect(() => {
    GET("/search.php?f=a").then(({ drinks }) => {
      setCocktailList(() => drinks);
    });
  }, []);
  const data = filteredList(cocktailList, "strCategory", category);

  return (
    <div className="Content">
      {data.map((cocktail) => (
        <DrinkCard data={cocktail} />
      ))}
    </div>
  );
};

export default Content;
