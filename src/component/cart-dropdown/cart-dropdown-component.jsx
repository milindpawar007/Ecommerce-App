import React from 'react'
import './cart-dropdown-style.scss'
import CustomButtom from '../custom-button-component/custom-button-component'
import CartItem from '../cart-item/cart.item.component'
import { connect} from 'react-redux'


const CartDropDown=({cartItem})=>(
    <div className='cart-dropdown'>
        <div className="cart-items">
            {
               cartItem.map(cartItem =><CartItem key={CartItem.id} item={cartItem} />) 
            }
        </div>
        <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
)

const mapStateToProps = ({cart:{cartItem}})=>({
    cartItem 
})

export default connect(mapStateToProps)( CartDropDown);