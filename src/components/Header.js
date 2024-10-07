import React from 'react';
import logo from '../../images/logo.png';
import { LOGO_URL } from '../utils/constant';
import { useState ,useEffect,useContext} from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Header = () => {
   // let btnName = 'Login';
    const[btnName,setBtnName]=useState('Login');
    //if no dependencyarray=> useeffect is called on every render.
    //if dependency array is empty=> useeffect is called only once on intial render.
    //if dependency array has some value=> useeffect is called on intial render and whenever the value in the dependency array changes.
    useEffect(() => 
        {console.log('useeffect render')});

    const onlineStatus = useOnlineStatus();
    const {loggedInUser} =useContext(UserContext)
    console.log(loggedInUser)
    
    return (
        <div className='flex justify-between bg-pink-200 shadow-lg mb-2 sm:bg-blue-200 lg:bg-green-200 '>
            <div className='flex'>
                <img src={logo} alt='logo'className='w-56'/>
               
                
            </div>
        <div className='flex items-center'>
            <ul className='flex p-4 m-4  '>
                <li className='px-4 '>
                    Online Status:{
                        onlineStatus ? "✅":"🔴"
                    }
                </li>
                <li className='px-4'>
                    <Link to="/">🏠Home</Link></li>
                <li className='px-4'>
                    <Link to="/About">📃About Us
                    </Link></li>
                <li className='px-4'>
                    <Link to='/contact'> ☎️Contact Us
                    </Link></li>
                <li className='px-4'>
                        <Link to='/grocery'>Grocery</Link>
                </li>
                <li className='px-4'>🛒Cart</li>
                <button 
                className='rounded-lg bg-pink-200 hover:bg-violet-300 active:bg-violet-300 focus:outline-none focus:ring focus:ring-violet-300'
                onClick={()=>{btnName === 'Login' ? setBtnName('Logout') : setBtnName("Login") ;}}>
                {btnName}</button>
                <li className='px-4'>{loggedInUser}</li>
            </ul>
        </div>
        </div>
    )
}
export default Header;