import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
  return(
    <div className="footer">
        <p>CopyRight © {year}</p>
    </div>
  )
}

export default Footer;


