import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          🔗 VisaChain
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/architecture">Architecture</Link></li>
          <li><Link to="/tech-specs">Tech Specs</Link></li>
          <li><Link to="/demo">Demo</Link></li>
          <li><Link to="/benefits">Benefits</Link></li>
          <li><Link to="/competitive-analysis">Competitive Analysis</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
