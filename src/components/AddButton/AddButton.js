import React, {useContext} from 'react'
import basket from "../../images/icon-cart.svg";
import {CounterContext} from '../Counter/Counter';

const AddButton = () => {
    const value = useContext(CounterContext); 

  return (
    <CounterContext.Consumer>
        <button onClick={console.log(value)}>Add to cart <img src={basket}/></button>
    </CounterContext.Consumer>
  )
}

export default AddButton