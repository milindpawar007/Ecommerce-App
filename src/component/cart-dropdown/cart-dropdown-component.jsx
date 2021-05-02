import React from 'react'
import './cart-dropdown-style.scss'
import CustomButtom from '../custom-button-component/custom-button-component'

const CartDropDown=()=>(
    <div className='cart-dropdown'>
        <div className="cart-items"></div>
        <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
)

export default CartDropDown;