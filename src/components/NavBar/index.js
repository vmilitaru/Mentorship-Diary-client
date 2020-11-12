import React, { useState } from 'react';
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import { SidebarData } from '../SideBarData';
import './NavBar.css';
import { IconContext } from 'react-icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import socLogoPng from "./soc-logo.png"

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  

  return (
    <div>
     
    
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
        
          <Link to='#' className='menu-bars'>
            <FaBars onClick={showSidebar} />
          </Link>
          <img src = {socLogoPng}alt="soc sign" style = {{height:"50px",display:"flex"}}></img>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.class}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          
        </nav>

      </IconContext.Provider>
    
    </div>
  );
}

export default Navbar;