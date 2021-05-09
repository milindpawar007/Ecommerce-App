import CartActionType from './cart.types';

export const toggleCartHidden =() =>({
    type: CartActionType.TOGGLE_CART_HIDDEN
})

export const addItem =(item) =>({
    type: CartActionType.ADD_ITEM,
    payload:item
})

export const DELETE_ITEM_FROM_CART=(item)=>({
    type: CartActionType.DELETE_ITEM_FROM_CART,
    payload:item
})