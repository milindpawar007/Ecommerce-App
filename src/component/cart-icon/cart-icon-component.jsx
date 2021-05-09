import React from 'react'
import './cart-icon-style.scss'
import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg'
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action'
import {selectCartItemsCount } from '../../redux/cart/cart.selector'
import { createStructuredSelector} from 'reselect'
const CartIcon=({toggleCartHidden ,itemCount})=>(
  
    <div className='cart-icon' onClick={toggleCartHidden}>
          {console.log(itemCount)}
          <ShoppingIcon className="shopping-icon"/>
          <span className='item-count'>{itemCount}</span>
    </div>
)

// taking sum of all element in cart
const mapStateToprops =createStructuredSelector({
  itemCount: selectCartItemsCount
})

//calling function from reducer 
const mapDispatchToProps = dispatch=>({
     toggleCartHidden:() => dispatch(toggleCartHidden())
})
export default connect ( mapStateToprops, mapDispatchToProps )(CartIcon);