import React, {useState} from 'react';
import "./Navbar.css"
import logo from ".././../images/logo.svg";
import  avatar from "../../images/image-avatar.jpg";
import basket from "../../images/icon-cart.svg";
import { useBetween } from 'use-between';
import {useShareableButtonState} from "../AddButton/AddButton"


const Navbar = () => {
  const { addCounter, setAddCounter } = useBetween(useShareableButtonState);

  const [show, setShow] = useState(false);



  return (
    <nav className='nav'>
      <div className='nav__container'>
        <div className='nav__logo'>
          <img className='logo__icon' src={logo}/>
        </div>
         {/* adding mobile icon */}
        <div className='mobileIcon'>
          <i></i>
        </div>
        <ul className='nav__menu'>
          <li className='menu__item'>Collections</li>
          <li className='menu__item'>Men</li>
          <li className='menu__item'>Women</li>
          <li className='menu__item'>About</li>
          <li className='menu__item'>Contact</li>
        </ul>
        </div>
        <div className='nav__info'>
          <img id="basket" src={basket} onClick={() => setShow(prev => !prev)} />
          {show && <div className='show-block'><p className='cart-name'>cart</p>{addCounter>0 ? `${addCounter}` : "Your cart is empty"}</div>}
          <img className='info__avatar' src={avatar}/>
        </div> 
    </nav>
  )
}

export default Navbar;