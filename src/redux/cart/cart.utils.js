 const addItemToCart =(OldCartItems, NewCartItemToAdd)=>{

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

export default addItemToCart;