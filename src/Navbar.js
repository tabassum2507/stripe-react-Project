import React from 'react'
import logo from "./images/logo.svg"
import { useGlobalContext } from './context'
import { FaBars } from 'react-icons/fa';


const Navbar = () => {
    const {openSidebar, openSubMenu, closeSubMenu} = useGlobalContext();

    const displaySubMenu = (e) => {
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom - 3;
        openSubMenu(page, { center, bottom });
    }
  return (
    <nav className='nav'>
        <div className='nav-center'>
         <div className='nav-header'>
          <img src={logo} alt="logo" className='nav-logo'/>
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
         </div>
         <ul className='nav-links'>
            <li>
                <button className='link-btn' onMouseOver={displaySubMenu}>
                    Products
                </button>
             </li>
             <li>
                <button className='link-btn' onMouseOver={displaySubMenu}>
                    Developers
                </button>
             </li>
             <li>
                <button className='link-btn' onMouseOver={displaySubMenu}>
                    Company
                </button>
             </li>
  
         </ul>
         <button className='btn signin-btn'>Sign in</button>
        </div>
    </nav>
  )
}

export default Navbar