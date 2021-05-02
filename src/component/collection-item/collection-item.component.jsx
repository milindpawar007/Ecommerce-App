import React from 'react'
import CustomButton from '../custom-button-component/custom-button-component'
import {connect} from 'react-redux'
import {addItem}  from '../../redux/cart/cart.action'
import './collection-item.style.scss'

const CollectionItem = ({item,addItem}) => {
   
   const {name,price,imageUrl}=item;
    return(
    <div className='collection-item'>
        <div className='image' style ={{
            backgroundImage : `url(${imageUrl})`
        }}   />
           
           
          <div className='collection-footer'>
        
             <span className ='name'><strong>{name}</strong></span>
             <span className ='price'><strong>{price}$</strong></span>
        </div>
        <CustomButton onClick={()=>addItem(item)} inverted > Add to Cart</CustomButton>  
    </div>
)}

const mapDisptachToProps=dispatch=>({
    addItem:item=>(dispatch(addItem(item)))
})

export default connect(null,mapDisptachToProps)( CollectionItem);
