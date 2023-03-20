import { GET } from "../../utils/http";
import { useState, useEffect } from "react";
import {  BiDrink } from 'react-icons/bi'
import {  GiDrinkMe } from 'react-icons/gi'
import {  FaCocktail,FaWineGlassAlt,FaGlassMartiniAlt } from 'react-icons/fa'
import "./index.scss";

const Hero = ({ setCategory }) => {
  const [cocktailCategoryList, setCocktailCategoryList] = useState([]);
 
  const onHandleClick = (value) => {
    setCategory(value);
  };
 
  useEffect(() => {
    GET("/list.php?c=list").then((category ) => {
      setCocktailCategoryList(() => category)
      // .then(()=>console.log("prova"));
    });
  }, []);


  return (
    <div className="Hero">
      <h1>495 MARTINIS & MORE</h1>
      <ul className="Hero_main_list">
        <li><div className="icon"><FaGlassMartiniAlt/></div>  <span>Martinis</span></li>
        <li> <div className="icon"><FaCocktail/></div>  <span>Classics</span></li>
        <li> <div className="icon"><GiDrinkMe/></div>  <span>Signatures</span></li>
        <li> <div className="icon">< FaWineGlassAlt/></div>  <span>Wine</span></li>
      </ul>
      <hr />
      <ul className="Hero_filter_list">

       {/* {cocktailCategoryList.map((category) => (
       <li onClick={()=> onHandleClick(`${category.strCategory}`)}>{`${category.strCategory}`}</li>
       
       ))}  */}

      
       <li onClick={() => onHandleClick("Cocktail")}>Cocktail</li>
        <li onClick={() => onHandleClick("Other / Unknown")}>Other</li>
        <li onClick={() => onHandleClick("Shake")}>Shake</li>
        <li onClick={() => onHandleClick("Shot")}>Shot</li>
        <li onClick={() => onHandleClick("Punch / Party Drink")}>Punch</li>
        <li onClick={() => onHandleClick("Coffee / Tea")}>Coffee</li>
       
      </ul>
    </div>
  );
};

export default Hero;
