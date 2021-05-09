import React from 'react'
import './cart-dropdown-style.scss'
import CustomButton from '../custom-button-component/custom-button-component'
import CartItem from '../cart-item/cart.item.component'
import { connect} from 'react-redux'
import {selectCartItems}from "../../redux/cart/cart.selector.js"
import { createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'
import { toggleCartHidden} from '../../redux/cart/cart.action'

const CartDropDown=({cartItem ,history ,dispatch})=>(
    <div className='cart-dropdown'>
    <div className='cart-items'>
       
      {  cartItem.length?
         cartItem.map(cartItem => (
         <CartItem key={cartItem.id} item={cartItem} /> ))
        :
        <span className='empty-message'><strong> Your Cart is Empty</strong> </span>
    }
    </div>
    <CustomButton onClick={()=> {
      history.push('/checkout');
      dispatch(toggleCartHidden())
      } }>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
    
    cartItem :selectCartItems
})

export default withRouter(connect(mapStateToProps)( CartDropDown));