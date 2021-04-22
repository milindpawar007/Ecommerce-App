import React from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as Logo }from'../../../src/assests/crown.svg'
import './header.component.scss'
import {auth} from '../../firebase/firebase.utils'
const Header =({currentUser}) => (

    <div className='header'>
     <Link to="/">
          <Logo className='logo'/>
     </Link>
        <div className='options'>
            <Link className='option'  to="/shop"> SHOP</Link>
            <Link className='option'  to="/"> Contact</Link>
          
            {
                currentUser?
                <div  className='options' onClick={()=>auth.signOut()}> Signout</div>
                :
                <Link className='option'  to="/signin"> SIGN IN</Link>
            }
        </div>
    </div>
)

export default Header;