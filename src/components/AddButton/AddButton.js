import React, {useContext} from 'react'
import basket from "../../images/icon-cart.svg";
import { useBetween } from 'use-between';



const AddButton = () => {
  const { count, setCount } = useBetween(useShareableState);

  return (
    
        <button onClick={console.log({counter})}>Add to cart <img src={basket}/></button>
    
  )
}

export default AddButton