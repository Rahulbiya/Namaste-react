import React from 'react';
import logo from '../../images/logo.png';
import { LOGO_URL } from '../utils/constant';
import { useState ,useEffect} from 'react';
const Header = () => {
   // let btnName = 'Login';
    const[btnName,setBtnName]=useState('Login');
    //if no dependencyarray=> useeffect is called on every render.
    //if dependency array is empty=> useeffect is called only once on intial render.
    //if dependency array has some value=> useeffect is called on intial render and whenever the value in the dependency array changes.
    useEffect(() => 
        {console.log('useeffect render')});
    
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
                <button 
                className='login-btn'
                onClick={()=>{btnName === 'Login' ? setBtnName('Logout') : setBtnName("Login") ;}}>
                {btnName}</button>
            </ul>
        </div>
        </div>
    )
}
export default Header;