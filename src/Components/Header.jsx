import React from 'react'
import "./Header.css"







function Header() {
    return (
       
        <header>
            
                <h1 className='logo'>akshai <span className='letter-m'>M</span><span className='fullname'>uraleedharan</span></h1>
                 <input type="checkbox" id='nav-toggle' className='nav-toggle' />
                  
              
                <nav >
                    <ul>
                        <li>home</li>
                        <li>about</li>
                        <li>services</li>
                        <li>contact</li>
                    </ul>
                </nav>

                <label htmlFor="nav-toggle" className='nav-toggle-label'>
                    <span></span>
                  </label>
             
        </header>

    )
   
};

export default Header;