import React from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as Logo }from'../../../src/assests/crown.svg'
import './header.component.scss'

const Header =() => (
    <div className='header'>
     <Link to="/">
          <Logo className='logo'/>
     </Link>
        <div className='options'>
            <Link className='option'  to="/shop"> SHOP</Link>
            <Link className='option'  to="/"> Contact</Link>

        </div>
    </div>
)

export default Header;