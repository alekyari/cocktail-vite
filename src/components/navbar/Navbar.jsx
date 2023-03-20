import "./index.scss"
import {  FaFacebookSquare, FaTiktok  } from 'react-icons/fa'
import {  GrInstagram  } from 'react-icons/gr'

const Navbar = () =>{


    return (
        <div className="Navbar">

      <ul className="Navbar_main_list">
        <li>Our Story</li>
        <li>The Formula</li>
        <li>495 Family</li>
        <li>The Kitchen</li>
        <li>495 career</li>
      </ul>
<h3> 495 COCKTAIL BAR</h3>
      <button>495 PARTNERS</button>
      <ul className="Navbar_social_list">
        <li><GrInstagram/></li>
        <li><FaFacebookSquare/></li>
        <li><FaTiktok/></li>
   
      </ul>
        </div>
    )
};

export default Navbar;