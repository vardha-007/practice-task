import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import close icon
import logo from '../Assets/logo_english.svg';
import './Navbar.css';
// import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {

  const [isResponsive,setIsResponsive]=useState(false);

  const handleToggle = () => {
    setIsResponsive(!isResponsive);
  };
 

  return (
    <div className='container-fluid'>
      <nav className='navbar'>
     
      <ul className={isResponsive ? "nav-links-mobile" :"nav-links ps-5" }
      onClick={()=>setIsResponsive(false)}>
        {/* <Link> */}
        <li className='login-btn'><button>Login</button></li>
       {/* </Link> */}
       {/* <Link> */}
       <li className='Kitchens'>Kitchens</li>
       {/* </Link> */}
        {/* <Link> */}
        <li className='Your-Kitchen-Lasts'>Your Kitchen Lasts</li>
       {/* </Link> */}
        {/* <Link> */}
        <li className='Get-Your-Kitchen-Lasts'>Get Your Kitchen Lasts</li>
       {/* </Link> */}
        {/* <Link> */}
         
    
       
      </ul>
      <button className='mobile-menu-icon' onClick={handleToggle}>
        {isResponsive ? (<FaTimes/>) : (<FaBars/>)}
       </button>
  {/* <Link> */}
  <li className='nuili-logo pe-5'> <img src={logo} alt="niuli-logo" /></li>
       {/* </Link> */}

       
    </nav>

    </div>
    
    
  );
};

export default Navbar;

