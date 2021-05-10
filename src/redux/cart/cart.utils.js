export const addItemToCart =(OldCartItems, NewCartItemToAdd)=>{

     const existingCartItem = OldCartItems.find(
                             OldCartItem => 
                             OldCartItem.id === NewCartItemToAdd.id)

     if(existingCartItem){
         return OldCartItems.map( OldCartItem =>
            OldCartItem.id === NewCartItemToAdd.id 
            ? { ...OldCartItem ,quantity : OldCartItem.quantity+1}
            :OldCartItem
            )
     }                        

     return [...OldCartItems ,{ ...NewCartItemToAdd ,quantity:1 }]
}


 export const reduceItemQuanityFromCart=(cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToRemove.id
    );
  
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
  
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };
//export default addItemToCart;