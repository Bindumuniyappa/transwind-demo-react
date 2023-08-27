import React from 'react';
import './SideNavbar.css'; // You can create a CSS file for styling

const SideNavbar = () => {
  return (
    <div className="Profile_sidebar">
      <nav className="nav_sidebar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNavbar;
