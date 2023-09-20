import React from 'react'
import basket from "../../images/icon-cart.svg";

const AddButton = () => {
  return (
    <button>Add to cart <img src={basket}/></button>
  )
}

export default AddButton