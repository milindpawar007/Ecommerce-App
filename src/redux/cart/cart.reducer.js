import CartActionType from './cart.types'
import addItemToCart from './cart.utils'

const INITIAL_STATE={
    hidden:true ,
    cartItem: []
};

const CartReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case CartActionType.TOGGLE_CART_HIDDEN:
            
           return{
               ...state,
               hidden: !state.hidden
           }

        case CartActionType.ADD_ITEM:
               return{
                   ...state,
                   cartItem:addItemToCart(state.cartItem, action.payload)
               }
               // check the id and delete it from state , here i am using filter to remove and passing it new object
        case CartActionType.DELETE_ITEM_FROM_CART:
             return{
                 ...state,
                 cartItem: state.cartItem.filter
                 (
                     cartItem=> cartItem.id !== action.payload.id
                 )
             }


        default:
           return state
    }
}

export default CartReducer;