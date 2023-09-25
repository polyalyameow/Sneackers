import React, {useState, useEffect, useRef} from 'react';
import "./Navbar.css"
import logo from ".././../images/logo.svg";
import  avatar from "../../images/image-avatar.jpg";
import basket from "../../images/icon-cart.svg";
import remove from "../../images/icon-delete.svg"
import { useBetween } from 'use-between';
import {useShareableButtonState} from "../AddButton/AddButton"
import {useShareableStateCollection} from "../product/Product"

import {data} from "../ProductText/ProductText"

import OutsideClickHandler from 'react-outside-click-handler';


const Navbar = () => {


  const { addCounter, setAddCounter } = useBetween(useShareableButtonState);

  const [show, setShow] = useState(false);

  const { collection, setCollection } = useBetween(useShareableStateCollection);


  return (
    <nav className='nav' >
      <div className='nav__container'>
        <div className='nav__logo'>
          <img className='logo__icon' src={logo}/>
        </div>
         {/* adding mobile icon */}
        <div className='mobileIcon'>
          <i></i>
        </div>
        <ul className='nav__menu' >
          <li className='menu__item'>Collections</li>
          <li className='menu__item'>Men</li>
          <li className='menu__item'>Women</li>
          <li className='menu__item'>About</li>
          <li className='menu__item'>Contact</li>
        </ul>
        </div>
        {data.map((item, i)=>
        <div className='nav__info' key={i}>
          <div>
          {addCounter>0 ? (<div className='basket-amount'>{addCounter}</div>) : null}
          <img id="basket" src={basket} onClick={() => setShow(prev => !prev)} />
          
          </div>

          {show && 
          <OutsideClickHandler onOutsideClick={() => {
            setShow(false);
          }}>
          
          <div className='show-block'> <p className='cart-name'>Cart</p>{addCounter>0 ? 
          (<div className='cart-content'>
            <div className='cart-content-show'>
              <img className='cart-thumbnail' src={collection.value} />
              <div>
                <p className='cart-title'>{item.title}</p>
                <p className='cart-price'>{item.price} x {addCounter} <strong style={{color: 'black'}}>${addCounter * item.price}</strong></p>
              </div>
              <img className="remove" src={remove} onClick={() => setAddCounter(0)}/>
            </div>
            <button className='cart-checkout'>Checkout</button>
          </div>)  : <p className='empty-cart'>Your cart is empty</p>}</div> </OutsideClickHandler> }
         
          <img className='info__avatar' src={avatar}/>
        </div> 
         )}
    </nav>
  )
}

export default Navbar;