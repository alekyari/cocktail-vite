import styles from "./index.module.scss"
import { useState } from "react";
import {  FaFacebookSquare, FaTiktok  } from 'react-icons/fa'
import {  GrInstagram  } from 'react-icons/gr'
import {  GiHamburgerMenu  } from 'react-icons/gi'


const Navbar = ({setShowModalReservation}) =>{
  const [showNavMenu, setShowNavMenu] = useState(false);

  const onHandleClick=() => setShowNavMenu((prev)=>!prev)
  const onHandleShowModalReservation=() => {setShowModalReservation(true)}

    return (
        <div className={styles.Navbar}>
     
     <div className={styles.hamburger}>
     < GiHamburgerMenu   onClick={onHandleClick}/>
     </div>
     {showNavMenu && <ul className={styles.main_list_mobile}>
        <li>Our Story</li>
        <li>The Formula</li>
        <li>495 Family</li>
        <li>The Kitchen</li>
        <li>495 career</li>
      </ul>}

      <ul className={styles.main_list}>
        <li>Our Story</li>
        <li>The Formula</li>
        <li>495 Family</li>
        <li>The Kitchen</li>
        <li>495 career</li>
      </ul>
<h3> 495 COCKTAIL BAR</h3>
      <button  onClick={onHandleShowModalReservation} className={styles.btn}>RESERVE NOW!</button>
      <ul className={styles.social_list}>
        <li><GrInstagram/></li>
        <li><FaFacebookSquare/></li>
        <li><FaTiktok/></li>
   
      </ul>
        </div>
    )
};

export default Navbar;