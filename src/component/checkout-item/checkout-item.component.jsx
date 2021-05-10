import { render } from '@testing-library/react'
import React from 'react'
import './checkout-item.style.scss'
import {connect} from 'react-redux'
import { DELETE_ITEM_FROM_CART, addItem ,REDUCE_THE_QUANTITY} from '../../redux/cart/cart.action'

const CheckOutItem=({cartItem, delete_item ,increase_quantity ,decrease_quantity})=>{

    const {name,imageUrl, price, quantity}  =cartItem
    return (
  
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className='arrow'  onClick={()=>decrease_quantity(cartItem)}> &#10096;</div>
           <span className='value'>{quantity}</span> 
            <div  className='arrow' onClick={()=>increase_quantity(cartItem)}>&#10097;</div>
        </span>
        <span className="price">{price}</span>
        <span className="remove-button">
        <img
            
            className="delete-button"
           
            src="https://img.icons8.com/fluent/48/000000/filled-trash.png" 
            onClick={()=>delete_item(cartItem)}
          alt="detele button"/> 
          </span>
    </div>
    )
};

const mapsDistpacthToProps = dispatch => ({
    
    delete_item: item => dispatch(DELETE_ITEM_FROM_CART(item)),
    increase_quantity: item => dispatch(addItem(item)),
    decrease_quantity: item => dispatch(REDUCE_THE_QUANTITY(item)),

})

export default connect (null,mapsDistpacthToProps)(CheckOutItem);






