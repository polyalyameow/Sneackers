import React from 'react'
import Counter from '../Counter/Counter'
import AddButton from '../AddButton/AddButton'

import "./ProductText.css"

export const data = [{
    logo: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    text: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: "125",
    sale: "50%",
    oldPrice: "250"
  
  }]

const ProductText = () => {
    return (
        <>
            {data.map((item, i)=>
            <div className='main__text' key={i}>
                <p>{item.logo}</p>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
                <div className='price'>
                    <div className='price--now'>
                        <p>${item.price}</p>
                        <p>{item.sale}</p>
                    </div>
                    <p>${item.oldPrice}</p>
                </div>
                <div className='action'>
                    <Counter/>
                    <AddButton />
                </div>
            </div>
             )}
        </> 
    )
}

export default ProductText