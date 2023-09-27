import React from 'react'
import Product from '../product/Product'
import ProductText from '../ProductText/ProductText'

import "./MainContainer.css"

const MainContainer = () => {
  return (
    <div className='main'>
        <Product />
        <ProductText/>
    </div>
  )
}

export default MainContainer