import React from 'react';
import logo from '../../images/logo.png';
import { LOGO_URL } from '../utils/constant';
import { useState } from 'react';
const Header = () => {
   // let btnName = 'Login';
    const[btnName,setBtnName]=useState('Login');
    
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
                <button className='login-btn'onClick={()=>{setBtnName('Logout');}}>{btnName}</button>
            </ul>
        </div>
        </div>
    )
}
export default Header;