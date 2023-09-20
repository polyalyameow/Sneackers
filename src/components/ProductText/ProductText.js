import React from 'react'
import Counter from '../Counter/Counter'
import AddButton from '../AddButton/AddButton'

import "./ProductText.css"

const ProductText = () => {
    return (
        <>
            <div className='main__text'>
                <p>sneackers</p>
                <h1>Fall Limited Edition Sneakers</h1>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                <div className='price'>
                    <div className='price--now'>
                        <p>$125</p>
                        <p>50%</p>
                    </div>
                    <p>$250</p>
                </div>
                <div className='action'>
                    <Counter/>
                    <AddButton />
                </div>
            </div>

        </>
    )
}

export default ProductText