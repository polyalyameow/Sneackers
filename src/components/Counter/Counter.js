import React, {useState, createContext} from 'react';
import { useBetween } from 'use-between';

const useShareableState = () => {
    const [counter, setCounter] = useState(0);
    return {
      counter,
      setCounter
    }
  }
  


const Counter = () => {
    // const [counter, setCounter] = useState(0)
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
        
            <button onClick={() => handleDecrement()}>-</button>
            
            { counter }
            
            <button onClick={() => handleIncrement()}>+</button>
        
    </div>
  )
}

export default Counter;
