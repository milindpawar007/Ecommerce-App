import { combineReducers } from 'redux'

import UserReducer from './user/user.reducer.jsx'
import CartReducer from './cart/cart.reducer'
export default combineReducers  ({
     user :UserReducer ,
     cart: CartReducer
})