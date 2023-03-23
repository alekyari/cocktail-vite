import { GET } from "../../utils/http";
import { filteredList } from "../../utils/funcs";
import { useState, useEffect } from "react";
import {  BiDrink } from 'react-icons/bi'
import {  GiDrinkMe } from 'react-icons/gi'
import {  FaCocktail,FaWineGlassAlt,FaGlassMartiniAlt } from 'react-icons/fa'
import styles from "./index.module.scss";

const Hero = ({ setCategory }) => {
  const [cocktailCategoryList, setCocktailCategoryList] = useState([]);
  const [showNavMenu, setShowNavMenu] = useState(false);

  const onHandleShowMenu=() => setShowNavMenu((prev)=>!prev)

  const onHandleClick = (value) => {
    setCategory(value);
  };
 

  useEffect(() => {
    GET("/list.php?c=list").then((category ) => {
      setCocktailCategoryList(() => category.drinks)
    });
  }, []);


  return (
    <div className={styles.Hero} >
      <h1>495 MARTINIS & MORE</h1>
      <ul className={styles.main_list}>
        <li><div className={styles.icon}><FaGlassMartiniAlt/></div>  <span>Martinis</span></li>
        <li> <div className={styles.icon}><FaCocktail/></div>  <span>Classics</span></li>
        <li> <div className={styles.icon}><GiDrinkMe/></div>  <span>Signatures</span></li>
        <li> <div className={styles.icon}>< FaWineGlassAlt/></div>  <span>Wine</span></li>
      </ul>
      <hr />
      <ul className={styles.filter_list}>

      {!showNavMenu && (<><li onClick={()=> onHandleClick("Ordinary Drink")}>Ordinary Drink</li>
      <li onClick={()=> onHandleClick("Cocktail")}>Cocktail</li>
      <li onClick={()=> onHandleClick("Shake")}>Shake</li></>)}

      <li onClick={onHandleShowMenu}> {!showNavMenu? "Show More..." : "Show Less"}</li>
       
       
      {showNavMenu && <div className={styles.hamList}>{cocktailCategoryList.map((category) => (
      
       <li key = {category.strCategory} onClick={()=> onHandleClick(`${category.strCategory}`)}>{`${category.strCategory}`}</li>
       ))} </div>}
  
       
      </ul>
    </div>
  );
};

export default Hero;
