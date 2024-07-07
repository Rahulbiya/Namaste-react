import React from 'react';
import logo from '../../images/logo.png';
import { LOGO_URL } from '../utils/constant';
const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img src={LOGO_URL} alt='logo'className='logo'/>
                <h1 className='logo-text'>Swigato</h1>
            </div>
        <div className='nav-items'>
            <ul>
                <li>🏠Home</li>
                <li>📃About Us</li>
                <li>☎️Contact Us</li>
                <li>🛒Cart</li>
            </ul>
        </div>
        </div>
    )
}
export default Header;