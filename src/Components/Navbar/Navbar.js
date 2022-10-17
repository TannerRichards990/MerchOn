import React from 'react';
import { useState } from 'react';
import './Navbar.css';


const Navbar = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const toggleMenu = () => {
    if (isMenuClicked) {
      setBurgerClass('burger-bar clicked');
      setMenuClass('Menu visible');
    }
    else {
      setBurgerClass('burger-bar unclicked');
      setMenuClass('Menu hidden');
    }

  return (
    <div style={{width: '100%', height: '100vh'}}>
      <nav>
        <div className='burger-menu'>
          <div className={burger_class} onClick={updateMenu}></div>
          <div className={burger_class} onClick={updateMenu}></div>
          <div className={burger_class} onClick={updateMenu}></div>
        </div>
        </nav>
    </div>

export default function Navbar() {
 //create a function for a burger menu navbar
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={'../../../public/assets/MerchOn.png'} alt='MerchOn Logo' />
      </div>
      <div className='nav-links'>
        <a href='#'>Storefront</a>
        <a href='#'>Manage Account</a>
        <a href='#'>About</a>
        <a href='#'>Sign-Out</a>
      </div>
    </div>
  );
}


        