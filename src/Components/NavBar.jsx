import {useState} from "react";
import React from 'react'
//import { Link } from 'react-router-dom';
import{Link} from 'react-scroll';
import logo from './images/logo.png';


function NavBar() {
  const[nav, setnav] = useState(false);
  const changeBackground =() =>{
    if(window.scrollY >= 50){
      setnav(true);
    }else{
      setnav(false);
    }
  }
  window.addEventListener('scroll', changeBackground);

  return (
    <div className='nav'>
        <nav className={nav ? 'nav active' :'nav'} >
            <Link to="main">
              <div className='logo'>
              <img src={logo}  alt=""/>
              {/* <span>Jane's Bite</span> */}
              </div>
                
           </Link>

          <div className='nav-items'>
             <ul>
                <li><Link to="main" smooth={true} duration={2000}>Home</Link></li>
                <li><Link to="product-page" smooth={true} duration={2000}>Products</Link></li>
                 <li><Link to="About-page" smooth={true} duration={2000}>About</Link></li>
                 <li><Link to="contact" smooth={true} duration={2000}>Contact</Link></li>
             </ul>
             </div>
         </nav>
   </div>
   )
}


export default NavBar
