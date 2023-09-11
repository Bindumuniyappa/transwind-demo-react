import React, { useState } from 'react';
import './SideNavbar.css';
import { NavLink } from 'react-router-dom';

const SideNavbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

 
  const navItems = [
    { to: '/profile', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/report', text: 'Report' },
    { to: '/contact', text: 'Contact' },
  ];

  return (
    <div className="Profile_sidebar">
      <nav className="nav_sidebar">
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {navItems.map((item, index) => (
            <li className='nav-items' key={index}>
              <NavLink
                exact
                to={item.to}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideNavbar;
