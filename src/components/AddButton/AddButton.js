import React, { useState } from 'react'
import basket from "../../images/icon-cart.svg";
import { useBetween } from 'use-between';
import {useShareableState} from "../../components/Counter/Counter"


export const useShareableButtonState = () => {
  const [addCounter, setAddCounter] = useState(0)
  return {
    addCounter, setAddCounter
  };
};



const AddButton = () => {
  const { counter, setCounter } = useBetween(useShareableState);
  const { addCounter, setAddCounter } = useBetween(useShareableButtonState);
  // const [addCounter, setAddCounter] = useState(0)

  return (
    
        <button onClick={() => (setAddCounter(counter))}>Add to cart <img src={basket}/></button>
    
  )
}

export default AddButton