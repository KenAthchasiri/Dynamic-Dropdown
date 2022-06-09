import React, { useState } from 'react'


const FoodComponent = (props) => {
    const {menu,foodName,image_url} = props

    return (
        <div className='single-food'>
            <h2>{foodName}</h2>
            <img src={image_url} alt={foodName} />
        </div>
    )
}

export default FoodComponent