import React, {useState, createContext} from 'react';


export const CounterContext = createContext();

const Counter = () => {
    const [counter, setCounter] = useState(0)

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
    <CounterContext.Provider value={counter}>
    <div className='counter'>
        <button onClick={() => handleDecrement()}>-</button>
        {counter}
        <button onClick={() => handleIncrement()}>+</button>
    </div>
    </CounterContext.Provider>
  )
}

export default Counter;
