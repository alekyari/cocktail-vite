import DrinkCard from "../drinkCard";
import { useState, useEffect } from "react";
import { filteredList } from "../../utils/funcs";
import { GET } from "../../utils/http";
import styles from "./index.module.scss";

const Content = ({category, setModalDrinkContext}) => {
  const [cocktailList, setCocktailList] = useState([]);
  useEffect(() => {
    GET("/search.php?f=a").then(({ drinks }) => {
      setCocktailList(() => drinks);
    });
  }, []);
  const data = filteredList(cocktailList, "strCategory", category);
 

  return (
    <div className={styles.Content}>
      {data.map((cocktail) => (
        <DrinkCard key={cocktail.idDrink} data={cocktail} setModalDrinkContext={setModalDrinkContext} />
      ))}
    </div>
  );
};

export default Content;
