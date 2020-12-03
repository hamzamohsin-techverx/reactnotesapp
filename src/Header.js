import React from 'react';
import logo from './images/google.png';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return(
    <div className="header">
      <NavLink to="/">  <img src={logo} alt="Logo"/></NavLink>
        <h1 className="text-white">Google Notces</h1>
    </div>
  )
}

export default Header;