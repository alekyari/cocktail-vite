import styled from "styled-components";
import { GET } from "../../utils/http";
import { filteredList } from "../../utils/funcs";
import { useState, useEffect } from "react";
import {  BiDrink } from 'react-icons/bi'
import {  GiDrinkMe } from 'react-icons/gi'
import {  FaCocktail,FaWineGlassAlt,FaGlassMartiniAlt } from 'react-icons/fa'
import styles from "./index.module.scss";
import Video from "../../assets/Video/Make Any Cocktail Simply Perfect _ Patrón Tequila.mp4";




// const Herowrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const Title = styled.h1`
//   font-size: 2.5rem;
// `;

// const Hr = styled.hr`
//     width: 80%;
//     border: 0;
//     border-bottom: 3px dotted #351e12;
//     border-width: 10px;
//     padding-top:15px;
// `;

// const Main_list = styled.ul`
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     gap:40px;
//     margin:0;
//     padding:0; 
//     list-style-type: none;
  

//     & li {
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     gap:20px;
//     margin:0;
//     padding:0;
   
    

//     span{
//         font-size: 1.2rem;
//         font-family:'Times New Roman', Times, serif;
//         font-style: 'italic';
//         cursor: pointer;

//         &:hover {
//           border-bottom: 1px solid black;
//         }
//       }
//   }
// `;


// const Icon = styled.div`
//   font-size: 1.3rem;
//   transform: rotate(9deg);
// `;

// const Filter_list = styled.ul`
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     gap:40px;
//     margin:0 0 0 20px 0;
//     padding:0;
//     list-style-type: none;

//     li {
//       padding: 20px 8px 10px 8px;
//       cursor: pointer;
//       font-weight: bold;
//       font-size: 0.7rem;
 

//       &:hover {
//         border-bottom: 1px solid black;
//       }
//     }
// `;

// const Hamlist = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap:40px;
//   position: fixed;
//   gap:25px;
//   top:80px;
//   right:10px;
//   width: 130px;
//   height: 800px;
//   background-color: rgba(87, 63, 63, 0.965) ;
//   color:white;
//   border-radius: 3px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.812);
//   padding:10px;
//   z-index: 2; 
// `;



// const Hero = ({ setCategory }) => {
//   const [cocktailCategoryList, setCocktailCategoryList] = useState([]);
//   const [showHeroMenu, setShowHeroMenu] = useState(false);

//   const onHandleShowMenu=() => setShowHeroMenu((prev)=>!prev)

//   const onHandleClick = (value) => {
//     setCategory(value);
//   };
 

//   useEffect(() => {
//     GET("/list.php?c=list").then((category ) => {
//       setCocktailCategoryList(() => category.drinks)
//     });
//   }, []);


//   return (
//     <Herowrap >
//       <Title >495 MARTINIS & MORE</Title>
//       <Main_list>
//         <li><Icon><FaGlassMartiniAlt/></Icon>  <span>Martinis</span></li>
//         <li> <Icon><FaCocktail/></Icon>  <span>Classics</span></li>
//         <li> <Icon><GiDrinkMe/></Icon>  <span>Signatures</span></li>
//         <li> <Icon>< FaWineGlassAlt/></Icon>  <span>Wine</span></li>

//       </Main_list>
//       <Hr />
//       <Filter_list>

//       {!showHeroMenu && (<><li onClick={()=> onHandleClick("Ordinary Drink")}>Ordinary Drink</li>
//       <li onClick={()=> onHandleClick("Cocktail")}>Cocktail</li>
//       <li onClick={()=> onHandleClick("Shake")}>Shake</li></>)}

//       <li onClick={onHandleShowMenu}> {!showHeroMenu? "Show More..." : "Show Less"}</li>
       
       
//       {showHeroMenu && <Hamlist>{cocktailCategoryList.map((category) => (
      
//        <li key = {category.strCategory} onClick={()=> onHandleClick(`${category.strCategory}`)}>{`${category.strCategory}`}</li>
//        ))} </Hamlist>}
  
       
//       </Filter_list>
//     </Herowrap>
//   );
// };




const Hero = ({ setCategory }) => {
  const [cocktailCategoryList, setCocktailCategoryList] = useState([]);
  const [showHeroMenu, setShowHeroMenu] = useState(false);

  const onHandleShowMenu=() => setShowHeroMenu((prev)=>!prev)

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
    <div className={styles.video_youtube}>
                <video playsInline muted autoPlay loop src={Video} ></video>
            </div>
    <h1>495 MARTINIS & MORE</h1>
    <ul className={styles.main_list}>
      <li><div className={styles.icon}><FaGlassMartiniAlt/></div>  <span>Martinis</span></li>
      <li> <div className={styles.icon}><FaCocktail/></div>  <span>Classics</span></li>
      <li> <div className={styles.icon}><GiDrinkMe/></div>  <span>Signatures</span></li>
      <li> <div className={styles.icon}>< FaWineGlassAlt/></div>  <span>Wine</span></li>
    </ul>
    <hr />
    <ul className={styles.filter_list}>

    {!showHeroMenu && (<><li onClick={()=> onHandleClick("Ordinary Drink")}>Ordinary Drink</li>
    <li onClick={()=> onHandleClick("Cocktail")}>Cocktail</li>
    <li onClick={()=> onHandleClick("Shake")}>Shake</li></>)}

    <li onClick={onHandleShowMenu}> {!showHeroMenu? "Show More..." : "Show Less"}</li>
     
     
    {showHeroMenu && <div className={styles.hamList}>{cocktailCategoryList.map((category) => (
    
     <li key = {category.strCategory} onClick={()=> onHandleClick(`${category.strCategory}`)}>{`${category.strCategory}`}</li>
     ))} </div>}

     
    </ul>
  </div>
);
};

export default Hero;