import React from 'react'
import './cart-dropdown-style.scss'
import CustomButton from '../custom-button-component/custom-button-component'
import CartItem from '../cart-item/cart.item.component'
import { connect} from 'react-redux'
import {selectCartItems}from "../../redux/cart/cart.selector.js"

const CartDropDown=({cartItem})=>(
    <div className='cart-dropdown'>
    <div className='cart-items'>
       
      {cartItem.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = (state)=>({
    
    cartItem :selectCartItems(state)
})

export default connect(mapStateToProps)( CartDropDown);