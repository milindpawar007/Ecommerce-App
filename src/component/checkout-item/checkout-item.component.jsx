import { render } from '@testing-library/react'
import React from 'react'
import './checkout-item.style.scss'

const CheckOutItem=({cartItem:{name,imageUrl, price, quantity}})=>(

  
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <span className="remove-button"><img
            
              className="delete-button"
             
              src="https://img.icons8.com/fluent/48/000000/filled-trash.png" 
             
            alt="detel button"/></span>
    </div>
);


export default CheckOutItem;




