import React from 'react';
import './Navbar.css'
//import Tomato from "../../assets/Tomato.jpeg";
//import search from "../../assets/search-icon.png";
//import basket from "../../assets/basket icon.png";
import { useState } from 'react';
import { assets } from '../../assets/assets';



const Navbar = () => {

    const [menu, setMenu] = useState("home")



  return (
    <div className="navbar">
    <img src={assets.Tomato} alt="Tomato" className='logo' />
    <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
        <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</li>
    </ul>
    <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search'>
        <img src={assets.basket_icon} alt=""  />
        <div className='dot'></div>

        </div>
         <button>sign in</button>

    </div>
    </div>
  );
}

export default Navbar;
