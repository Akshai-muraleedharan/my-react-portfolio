import React from 'react'
import "./Header.css"








function Header() {
    return (
       
        <header>
            
                <h1 className='logo'>akshai <span className='letter-m'>M</span><span className='fullname'>uraleedharan</span></h1>
                 <input type="checkbox" id='nav-toggle' className='nav-toggle' />
                  
              
                <nav >
                    <ul>
                        <li>
                            <a href="./#home-section">Home </a>
                        </li>
                        <li>
                            <a href="./#about-section">About </a>
                        </li>
                        <li>
                            <a href="./#services-section">services</a>
                        </li>
                        <li>
                            <a href="./#contact-section">contact</a>
                        </li>
                    </ul>
                </nav>

                <label htmlFor="nav-toggle" className='nav-toggle-label'>
                    <span></span>
                  </label>
             
        </header>

    )
   
};

export default Header;