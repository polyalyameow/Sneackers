import React, { useState } from 'react'
import basket from "../../images/icon-cart.svg";
import { useBetween } from 'use-between';
import {useShareableState} from "../../components/Counter/Counter";

import "./AddButton.css"


export const useShareableButtonState = () => {
  const [addCounter, setAddCounter] = useState(0)
  return {
    addCounter, setAddCounter
  };
};



const AddButton = () => {
  const { counter, setCounter } = useBetween(useShareableState);
  const { addCounter, setAddCounter } = useBetween(useShareableButtonState);

  return (
    
        <button className='add-btn' onClick={() => (setAddCounter(counter))}><img src={basket} className='basket'/>Add to cart</button>
    
  )
}

export default AddButton