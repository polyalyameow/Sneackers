import React, {useState} from 'react';
import { useBetween } from 'use-between';
import "./Counter.css"

import plus from "../../images/icon-plus.svg";
import minus from "../../images/icon-minus.svg"

export const useShareableState = () => {
  const [counter, setCounter] = useState(0)
  return {
    counter, setCounter
  };
};

const Counter = () => {
    const { counter, setCounter } = useBetween(useShareableState);

   

    const handleDecrement = () =>{
        if (counter === 0){
            return setCounter(0);
        } else {
            return setCounter(counter-1);
        }
    }

    const handleIncrement = () => {
        return setCounter(counter + 1);
    }

  return (
    <div className='counter'>
        
            <button className='counter-btn'><img src={minus} onClick={() => handleDecrement()}/>
            
            { counter }
            
            <img src={plus} onClick={() => handleIncrement()}/></button>
        
    </div>
  )
}

export default Counter;
