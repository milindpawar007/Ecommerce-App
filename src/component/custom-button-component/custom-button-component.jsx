import React from 'react';
import './custom-button-style.scss';

const CustomButton = ( {children , isGoogleSignIN,inverted,...otherProps })=>(
 <button 
                    className={` ${inverted ? 'inverted' :''}
                     ${isGoogleSignIN ? 'google-sign-in' :''} 
                     custom-button`} {...otherProps}>
   {children}
 </button>
);



export default CustomButton;